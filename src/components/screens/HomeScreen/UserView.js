import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

import { Container, Content, Card, H3} from 'native-base';
import { withNavigation } from 'react-navigation';

import UserCard from '../../reusables/UserCard';

import { connect } from 'react-redux';

import { getUsers } from '../../../actions/UserActions'

class UserView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.getUsers();
    }

    renderItems() {
        if(this.props.list){

            return this.props.list.slice(1,4).map((item) => {
                return (
                    <UserCard 
                        key={item.name}
                        item={{...item, thumbnail:{uri:item.photo_url}}}
                    />
                    );
            });
        }
    }

    render() {
        console.log(this.props)
        return (
            <Card
                style={styles.eQuoteContainer}
            >
                <H3 style={styles.cardTitle} font-size={10}>
                    Employees
                </H3>
                <ScrollView>
                    {this.renderItems()}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('UserList')}>
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
        error: state.user.error,
        loading: state.user.loading,
        list: state.user.data,
    });
}
// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default connect(mapStateToProps, { getUsers })(withNavigation(UserView));;
