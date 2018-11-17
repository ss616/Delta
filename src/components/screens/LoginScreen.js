// Library Imports
import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native';
import { Container, Header, Content, Text, Form, Item, Input, Label, Picker, View } from 'native-base';

// External Library Imports
import { GoogleSigninButton } from 'react-native-google-signin';
import { connect } from 'react-redux';

// Local Imports
import { loginUser } from '../../actions';

//const item_picker = Picker.Item;​
class LoginScreen extends Component{

    state = { company_name: '', company_type: 'Bank', data: [{
        value: 'Bank',
      }, {
        value: 'Business',
      }, {
        value: 'School',
      }, {
        value: 'Healthcare',
      }, {
        value: 'Others',
      }]};

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
                                value={this.state.company_name} 
                                onChangeText={company_name => this.setState({ company_name })}
                                />
                        </Item>
                        <Item stackedLabel >
                        <Label> Company Type </Label>
                        <View style={{ width: 300, marginLeft: 8 }}>
                            <Dropdown
                            onChangeText={company_type => this.setState({ company_type })}
                            label='We are into...'
                            data={this.state.data}
                            />
                        </View>
                        <View style={styles.button}>
                            <GoogleSigninButton
                                style={{ width: 120, height: 48, margin: 20 }}
                                size={GoogleSigninButton.Size.Standard}
                                color={GoogleSigninButton.Color.Dark}
                                onPress={this.props.loginUser}
                                disabled={this.props.loading} />
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
//<Text>{this.state.company_type}</Text>
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
        user: state.auth.user,
        error: state.auth.error,
        loading: state.auth.loading
    });
}

export default connect(mapStateToProps, { loginUser })(LoginScreen);