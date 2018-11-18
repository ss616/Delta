// Library Imports
import React, {Component} from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

// External Library Imports
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';
import { connect } from 'react-redux';

// Local Imports
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';
import LoginScreen from './screens/LoginScreen';
import DrawerContent from './DrawerContent';
import { postUser } from '../actions';
import AccessGroupScreen from './screens/AccessGroupScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ItemDetailScreen from './screens/ItemDetailScreen/ItemDetailScreen';
import { StyleProvider } from 'native-base';
import { setPrimaryColor } from '../settings';


const Drawer = createDrawerNavigator({
        // For each screen that you can navigate to, create a new entry like this:
        Access: {
          screen: AccessGroupScreen,
        },
        Home: {
            screen: HomeScreen,
        },
    },
    {
      initialRouteName: 'Home',
      drawerPosition: 'left',
      contentComponent: DrawerContent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle'
    });
    
// The Root of our Stack Navigation
const RootStack = createStackNavigator({
    Access: {
      screen: AccessGroupScreen
    },
    Drawer: { 
      screen: Drawer
    },
    Home: {
      screen: HomeScreen
    },
    ItemDetail: {
      screen: ItemDetailScreen 
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);


class Main extends Component {
  constructor() {
    super();
    GoogleSignin.configure();
    this.state = {
      loading: true,
    };
  }

  /**
   * When the App component mounts, we listen for any authentication
   * state changes in Firebase.
   * Once subscribed, the 'user' parameter will either be null (logged out) or an Object (logged in)
   */
  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });

      if(user!=null){
        this.props.postUser({...user._user, 
                              company_name: this.props.company_name, 
                              company_type: this.props.company_type});
      }
    });
  }

  /**
   * Don't forget to stop listening for authentication state changes
   * when the component unmounts.
   */
  componentWillUnmount() {
    this.authSubscription();
  }

  render() {

    console.log('MainRender');

    // The application is initialising
    if (this.state.loading) return null;

    // The response is an Object, so they're logged in and posted
    if (this.state.user){   
      return <RootStack/>
    }

    // The user is null, so they're logged out
    return <LoginScreen />
  }
}

const mapStateToProps = state => {
  console.log(state)
  return({
      response: state.auth.response,
      error: state.auth.error,
      loading: state.auth.loading,
      user: state.auth.user,
      company_name: state.auth.company_name,
      company_type: state.auth.company_type,
  });
}

export default connect(mapStateToProps, { postUser })(Main);