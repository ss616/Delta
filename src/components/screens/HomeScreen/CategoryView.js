import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

// External Library Imports
import { withNavigation } from 'react-navigation';

//Local Imports
import ImageWithTitleCard from '../../reusables/ImageWithTitleCard';

class CategoryView extends Component {
    
    state = { items: [
        {
            title: 'Laptops',
            thumbnail: require('../../../assets/laptop.jpg'),
            height: 60,
            margin: 0,
            width: 85,
            resizeMode: 'center',
        },
        {
            title: 'Desktops',
            thumbnail: require('../../../assets/desktop.jpg'),
            height: 60,
            margin: 0,
            width: 85,
            resizeMode: 'center',
        },
        {
            title: 'Workstations',
            thumbnail: require('../../../assets/workstation.jpeg'),
            height: 60,
            margin: 0,
            width: 85,
            resizeMode: 'center',
        },
        {
            title: 'Servers',
            thumbnail: require('../../../assets/server.png'),
            height: 60,
            margin: 0,
            width: 85,
            resizeMode: 'center',
        },
        {
            title: 'Processors',
            thumbnail: require('../../../assets/processor.jpg'),
            height: 60,
            margin: 0,
            width: 85,
            resizeMode: 'center',
        },
        {
            title: 'GPUs',
            thumbnail: require('../../../assets/gpu.jpg'),
            height: 60,
            margin: 0,
            width: 85,
            resizeMode: 'center',
        },
        {
            title: 'Accessories',
            thumbnail: require('../../../assets/accessories.jpg'),
            height: 60,
            margin: 0,
            width: 85,
            resizeMode: 'center',
        }
    ]};

  renderItems() {
    return this.state.items.map((item) => {
    return (
        <ImageWithTitleCard 
                key={item.title}
                item={item}
                onPress= {() => {
                    console.log(this.props)
                    this.props.navigation.navigate('ItemList', {'itemList': item})}}
            />
    );
    });
}

  render() {
        return (
            <View style={{ marginTop: 5, paddingTop:5, paddingEnd:10, paddingBottom:5, backgroundColor:'white'}}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {this.renderItems()}
            </ScrollView>
        </View>
        );
  }
}
export default withNavigation(CategoryView);
