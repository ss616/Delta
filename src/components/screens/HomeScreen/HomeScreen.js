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

// External Library imports
import { Container, Content, View, Card, Icon, Button} from 'native-base';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

// Local Imports
import HomeScreenHeader from './HomeScreenHeader';
import EQuoteCard from '../../reusables/EQuoteCard';

//Define Constants

const EQUOTES= [
    {
        title: 'Expiry :',
        subtitle: 'Created By :',
        thumbnail: require('../../../assets/logo.png'),
        expiry_date: '16/12/2018',
        shopper: 'mogambo',
        user_thumbnail: require('../../../assets/pooh.png'),
    },
    {
        title: 'Expiry :',
        subtitle: 'Created By :',
        thumbnail: require('../../../assets/logo.png'),
        expiry_date: '16/12/2018',
        shopper: 'mogambo',
        user_thumbnail: require('../../../assets/pooh.png'),
    },
    {
        title: 'Expiry :',
        subtitle: 'Created By :',
        thumbnail: require('../../../assets/logo.png'),
        expiry_date: '16/12/2018',
        shopper: 'mogambo',
        user_thumbnail: require('../../../assets/pooh.png'),
    },
];

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

    renderItems() {
        return EQUOTES.map((EQUOTE) => {
        return (
            <EQuoteCard 
                    key={EQUOTE.title}
                    item={EQUOTE}
                />
        );
        });
    }

    render() {
        const type = this.props.navigation.getParam('type');
        const cards=this.renderItems();

        console.log("HomeRender")
        return (
            <Container backgroundColor='white'>
                
                <HomeScreenHeader 
                    leftIconName='ios-menu'
                    onLeftButtonPress={() => this.props.navigation.openDrawer()}
                    searchPlaceholder={'What are you looking for?'}
                />
                <Card style={styles.eQuoteContainer}>
                    <ScrollView>
                        {cards}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EQuoteList')}>
                            <Text style={styles.headerText}>View More</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </Card>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    eQuoteContainer: {
        justifyContent: 'flex-start',
        padding: 10,
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
        paddingTop: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
      },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
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

/*
<Content contentContainerStyle={styles.container}>
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
            vertical={true}
            showsVerticalScrollIndicator={false}
        >
        </ScrollView>
    </SafeAreaView>
</Content>*/
/*<ScrollView>
    {this.renderItems()}
</ScrollView>
*/

