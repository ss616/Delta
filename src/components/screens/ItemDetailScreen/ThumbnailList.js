import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

// External Library Imports
import {Card, Thumbnail} from 'native-base';

// Local Imports


export default class ThumbnailList extends Component {
    render() {
        return(
            <View style={{marginTop:5, marginBottom:10}}>
                <View style={{ marginTop: 10 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Thumbnail style={styles.Thumbnail} square source={require('../../../assets/accessories.jpg')}
                        />
                        <Thumbnail style={styles.Thumbnail} square source={require('../../../assets/desktop.jpg')}
                            />
                        <Thumbnail style={styles.Thumbnail} square source={require('../../../assets/laptop.jpg')}
                            />
                        <Thumbnail style={styles.Thumbnail} square source={require('../../../assets/processor.jpg')}
                        />
                        <Thumbnail style={styles.Thumbnail} square source={require('../../../assets/server.png')}
                            />
                        <Thumbnail style={styles.Thumbnail} square source={require('../../../assets/laptop.jpg')}
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = {
    Thumbnail: {
        height:74,
        width:74,
        borderRadius: 5,
        marginRight: 10,
    }
}