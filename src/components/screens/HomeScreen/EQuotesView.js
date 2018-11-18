import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

import { Container, Content, Card, Icon, Button, H2, H3} from 'native-base';
import { withNavigation } from 'react-navigation';

import EQuoteCard from '../../reusables/EQuoteCard';

const EQUOTES= [
    {
        title: 'Expiry :',
        subtitle: 'Created By :',
        thumbnail: require('../../../assets/server.png'),
        expiry_date: '16/12/2018',
        shopper: 'mogambo',
        user_thumbnail: require('../../../assets/pooh.png'),
    },
    {
        title: 'Expiry :',
        subtitle: 'Created By :',
        thumbnail: require('../../../assets/accessories.jpg'),
        expiry_date: '14/12/2018',
        shopper: 'mogambo',
        user_thumbnail: require('../../../assets/pooh.png'),
    },
    {
        title: 'Expiry :',
        subtitle: 'Created By :',
        thumbnail: require('../../../assets/processor.jpg'),
        expiry_date: '12/12/2018',
        shopper: 'mogambo',
        user_thumbnail: require('../../../assets/pooh.png'),
    },
];

class EQuotesView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderItems() {
        return EQUOTES.map((EQUOTE) => {
            return (
                <EQuoteCard 
                        key={EQUOTE.expiry_date}
                        item={EQUOTE}
                    />
            );
        });
    }

    render() {
    const cards=this.renderItems();

    return (
        <Card
            style={styles.eQuoteContainer}
        >
            <H3 style={styles.cardTitle} font-size={10}>
                Quotes
            </H3>
            <ScrollView>
                {cards}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('EQuoteList')}>
                    <Text style={styles.headerText}>View More</Text>
                </TouchableOpacity>
            </ScrollView>
        </Card>
    );
    }
}
const styles = StyleSheet.create({
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    cardTitle:{
        color: '#514d47',
        justifyContent: 'flex-start',
        marginLeft:15,
        marginTop:10,
    }
});

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(EQuotesView);
