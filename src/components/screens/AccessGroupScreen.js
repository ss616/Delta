import React, { Component } from 'react';

import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native';

// External Library imports
import { Container, Content, Button, View, Text} from 'native-base';

// Local Imports

export default class AccessGroupScreen extends Component {
    
    renderButton(text){
        return(
            <Button rounded onPress={() => this.props.navigation.navigate('Home', {type:text})} success style={styles.button}>
                <Text >{text} </Text>
            </Button>
        );
    }

    render() {
        console.log("HomeRender")
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            {this.renderButton('Shopper')}
                            {this.renderButton('Buyer')}
                            {this.renderButton('Admin')}
                        </View>
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
    button: {
        margin: 30,
        padding: 20,
        width: 200,
        textAlign: 'center',
        justifyContent: 'center'
    }
});
