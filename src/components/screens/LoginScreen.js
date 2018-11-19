// Library Imports
import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native';
import { Container, Button, Header, Content, Text, Form, Item, Input, Label, Picker, View } from 'native-base';

// External Library Imports
import { connect } from 'react-redux';

// Local Imports
import { postUser, nameChanged, typeChanged } from '../../actions';

//const item_picker = Picker.Item;​
class LoginScreen extends Component{

    state = { company_name: '', company_type: 'Bank', type: [{
        value: 'Bank',
      }, {
        value: 'Education',
      }, {
        value: 'Healthcare',
      }, {
        value: 'RetailStores',
      }, {
        value: 'Others',
      }],
      locs: [{
        value: 'RU|Russia',
      }, {
        value: 'PA|Panama',
      }, {
        value: 'PL|Poland',
      }, {
        value: 'SA|Saudi Arabia',
      }, {
        value: 'SG|Singapore',
      }]};

    onNameChange(text) {
        this.props.nameChanged(text)
    }

    onTypeChange(text) {
        this.props.typeChanged(text)
    }

    render() {
        return(
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',}}>
                    <Image 
                        resizeMode='contain'
                        style={{height: 200, width:350, justifyContent:"center"}}
                        source={require('../../assets/logo.png')}
                    />
                    <Form >
                        <Item stackedLabel>
                        <Label> Company Name </Label>
                        <Input
                                secureTextEntry={false}
                                placeholder=""
                                label="Company Name"
                                value={this.props.company_name} 
                                onChangeText={this.onNameChange.bind(this)}
                                />
                        </Item>
                        <Item stackedLabel >
                        <Label> Company Type </Label>
                        <View style={{ width: 300, marginLeft: 8 }}>
                            <Dropdown
                                onChangeText={this.onTypeChange.bind(this)}
                                label='We are into...'
                                data={this.state.type}
                            />
                        </View>
                        <View style={{ width: 300, marginLeft: 8 }}>
                            <Dropdown
                                onChangeText={this.onLocChange.bind(this)}
                                label='We are based in...'
                                data={this.state.locs}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                style={{ width: 120, height: 48, margin: 20, justifyContent: 'center' }}
                                onPress={() => {this.props.postUser(this.props.company_name,this.props.company_type, this.props.location)}}
                             ><Text>Log In</Text></Button>
                        </View>
                        </Item>
                    </Form>
                </View>
                </SafeAreaView>
                </Content>
            </Container>  
        );
    }
}

const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    }
}

const mapStateToProps = state => {
    return({
        error: state.auth.error,
        loading: state.auth.loading,
        company_name: state.auth.company_name,
        company_type: state.auth.company_type,
        location: state.auth.location,
    });
}

export default connect(mapStateToProps, { postUser, nameChanged, typeChanged, locChange })(LoginScreen);