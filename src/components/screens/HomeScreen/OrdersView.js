import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

import { Container, Content, Card, Icon, Button, H2, H3} from 'native-base';
import { withNavigation } from 'react-navigation';

import EQuoteCard from '../../reusables/EQuoteCard';

import {getOrders} from '../../../actions/ItemActions';

import {connect} from 'react-redux';

class OrdersView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.getOrders();
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
        console.log(this.props)
    return (
        <Card
            style={styles.eQuoteContainer}
        >
            <H3 style={styles.cardTitle} font-size={10}>
                Orders
            </H3>
            <ScrollView>
                {cards}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderList')}>
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
export default connect(mapStateToProps, {getOrders})(withNavigation(OrdersView));
