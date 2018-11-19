// Library Imports
import React, {Component} from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

// External Library Imports
import { connect } from 'react-redux';

// Local Imports
import getTheme from '../../native-base-theme/components';
import LoginScreen from './screens/LoginScreen';
import DrawerContent from './DrawerContent';
import { postUser } from '../actions';
import AccessGroupScreen from './screens/AccessGroupScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ItemDetailScreen from './screens/ItemDetailScreen/ItemDetailScreen';
import { StyleProvider } from 'native-base';
import { setPrimaryColor } from '../settings';
import EQuoteListScreen from './screens/EQuoteListScreen/EQuoteListScreen';
// nacho

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
    EQuoteList: {
      screen: EQuoteListScreen
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
    this.state = {
      loading: true,
    };

  }

  render() {

    console.log('MainRender');
    console.log(this.props.response);

    // The application is initialising
    //if (this.props.loading) return null;

    // else{
    //   return (
    //     console.log(this.props.response)
    //   );
    // }
    
    // The response is an Object, so they're logged in and posted
    if (this.props.response){ 
      setPrimaryColor(this.props.response.data.primary_color) 
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