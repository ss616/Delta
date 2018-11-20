import React, { Component } from 'react';

import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    Switch,
    Text,
    TouchableOpacity,
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// External Library imports
import { Container, Content, View, Card, Button} from 'native-base';
import { connect } from 'react-redux';

import { signOut } from '../../../actions';

// Local Imports
import HomeScreenHeader from './HomeScreenHeader';
import CategoryView from './CategoryView';
import { primaryColor } from '../../../settings';
import FeaturedView from './FeaturedView';
import viewSwitcher from './viewSwitcher';
// import FeaturedView from './FeaturedView';
// import RecommendedView from './RecommendedView';
// import CategoryView from './CategoryView';
// import PromoCard from './PromoCard';
// import PostNewFab from './PostNewFab';
import EQuoteCard from '../../reusables/EQuoteCard';

class HomeScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        header:null,
        drawerLabel: 'Notification',
        drawerIcon: ({ tintColor }) => (
            <Image
                tintColor={tintColor}
                //source={require('../../../assets/DrawerIcons/logo.png')}
                style={styles.icon}
            />
        ),
    })

    render() {
        const type = this.props.navigation.getParam('type');

        console.log("HomeRender")
        return (
            <Container backgroundColor='white'>
                
                <HomeScreenHeader 
                    rightIconName='ios-log-out'
                    leftIcon={<Icon name='triangle-outline' size={25} paddingTop={5} style={styles.gridIconContainerStyle} />}
                    onRightButtonPress={() => this.props.signOut()}
                    searchPlaceholder={'What are you looking for?'}
                    color={primaryColor}
                />
                <Content contentContainerStyle={styles.container}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <ScrollView
                            vertical={true}
                            showsVerticalScrollIndicator={false}
                        >
                            {viewSwitcher(type)}
                        </ScrollView>
                    </SafeAreaView>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    eQuoteContainer: {
        justifyContent: 'flex-start',
        padding: 10,
    },
    gridIconContainerStyle:{ 
        color: 'white', 
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    recommendedContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        borderColor: 'red',
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 0,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
    button: {
        margin: 30,
        padding: 20,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#ffffff',
    }
});

export default connect(null, {signOut})(HomeScreen)

