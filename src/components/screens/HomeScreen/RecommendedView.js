import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';


// External Library Imports
import { withNavigation } from 'react-navigation';
import {Card} from 'native-base';

import { connect } from 'react-redux';

// Local Imports
import ImageWithTitleCard from '../../reusables/ImageWithTitleCard.js';
import { primaryColor } from '../../../settings.js';

import {getRecommendations} from '../../../actions/RecommendedActions';

class RecommendedView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.props.getRecommendations();
      }    

    renderItems() {
        if(this.props.list){
            return this.props.list.map((item) => {
                return (
                    <ImageWithTitleCard 
                    key={item.Product}
                    item={{...item, height:100, margin:10, width: 130, thumbnail:{uri:item.photo_url}}}
                    onPress= {() => this.props.navigation.navigate('ItemDetail', {'item': item})}
                    />
                    );
                });
        }
    }
    
    render() {
        console.log(this.props);
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
mapStateToProps = state => {
    return (
        {
            error: state.rec.error,
            loading: state.rec.loading,
            list: state.rec.data,
        }
    );
}
export default connect(mapStateToProps, { getRecommendations })(withNavigation(RecommendedView));