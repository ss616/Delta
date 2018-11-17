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

export default class HomeScreen extends Component {
    
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
                            <Button rounded success style={styles.button}><Text >Shopper </Text></Button>
                            <Button rounded success style={styles.button}><Text>Buyer </Text></Button>
                            <Button rounded success style={styles.button}><Text>Admin </Text></Button>
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
