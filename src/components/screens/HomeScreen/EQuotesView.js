import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

import { Container, Content, Card, Icon, Button, H2, H3} from 'native-base';
import { withNavigation } from 'react-navigation';

import EQuoteCard from '../../reusables/EQuoteCard';

import { connect } from 'react-redux';

import { getQuotes } from '../../../actions/ItemActions'

class EQuotesView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.getQuotes();
    }

    renderItems() {
        if(this.props.list){

            return this.props.list.slice(1,4).map((item) => {
                return (
                    <EQuoteCard 
                    key={item.expiry_date}
                    item={item}
                    />
                    );
            });
        }
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

const mapStateToProps = state => {
    return({
        error: state.auth.error,
        loading: state.auth.loading,
        list: state.item.data,
    });
}
// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default connect(mapStateToProps, { getQuotes })(withNavigation(EQuotesView));;
