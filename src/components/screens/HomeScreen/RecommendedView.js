import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';


// External Library Imports
import { withNavigation } from 'react-navigation';
import {Card} from 'native-base';

// Local Imports
import ImageWithTitleCard from '../../reusables/ImageWithTitleCard.js';
import { primaryColor } from '../../../settings.js';

class RecommendedView extends Component {
    
    state = { items: [
        {
            title: 'Black Sails',
            thumbnail: require('../../../assets/laptop.jpg'),
            height: 100,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            margin: 10,
            width: 130,
        },
        {
            title: 'WWE 2k18',
            thumbnail: require('../../../assets/laptop.jpg'),
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            height: 100,
            margin: 10,
            width: 130,
        },
        {
            title: 'Supernatural',
            thumbnail: require('../../../assets/laptop.jpg'),
            height: 100,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            margin: 10,
            width: 130,
        },
        {
            title: 'Maleficent',
            thumbnail: require('../../../assets/laptop.jpg'),
            height: 100,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            margin: 10,
            width: 130,
        },
        {
            title: 'FIFA 18',
            thumbnail: require('../../../assets/laptop.jpg'),
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            height: 100,
            margin: 10,
            width: 130,
        },
        {
            title: 'Venom',
            thumbnail: require('../../../assets/laptop.jpg'),
            height: 100,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            margin: 10,
            width: 130,
        }
    ]};

    renderItems() {
        return this.state.items.map((item) => {
        return (
            <ImageWithTitleCard 
                    key={item.title}
                    item={item}
                    onPress= {() => this.props.navigation.navigate('ItemDetail', {'item': item})}
                />
        );
        });
    }
    
    render() {
        return(
            <View style={{marginTop:5, marginBottom:10}}>
                <Text style={{ fontSize: 14, fontWeight: '100', paddingHorizontal: 10, color: primaryColor }}>
                    Recommended For You >
                </Text>
                <Card style={{padding:1, margin:2,paddingBottom:10,}}>
                    <View style={{ marginTop: 10 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                        {this.renderItems()}
                        </ScrollView>
                    </View>
                </Card>
            </View>
        );
    }
}
export default withNavigation(RecommendedView);