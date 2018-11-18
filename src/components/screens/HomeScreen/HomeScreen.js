import React, { Component } from 'react';

import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image, Text
} from "react-native";

// External Library imports
import { Container, Content, Fab, Icon, Button, StyleProvider} from 'native-base';

// Local Imports
import HomeScreenHeader from './HomeScreenHeader';
import CategoryView from './CategoryView';
import EmployeeList from './EmployeeList';
import { primaryColor } from '../../../settings';
import FeaturedView from './FeaturedView';
import viewSwitcher from './viewSwitcher';
// import FeaturedView from './FeaturedView';
// import RecommendedView from './RecommendedView';
// import CategoryView from './CategoryView';
// import PromoCard from './PromoCard';
// import PostNewFab from './PostNewFab';

export default class HomeScreen extends Component {
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
        
        return (
                <Container>
                    <HomeScreenHeader 
                        leftIconName='ios-menu'
                        onLeftButtonPress={() => this.props.navigation.openDrawer()}
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f3f9',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    icon: {
        width: 24,
        height: 24,
    },
});
