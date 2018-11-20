import React, { Component } from 'react';

import {
    View,
    StatusBar,
    Image,
} from "react-native";

// External Library imports
import { Container, H2, H3, Text, Card, List, } from 'native-base';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import ProgressBar from 'react-native-progress/Bar';
import ReadMore from 'react-native-read-more-text';

import {connect} from 'react-redux'

// Local Imports
import ItemDetailScreenHeader from './ItemDetailScreenHeader';
import ThumbnailList from './ThumbnailList';
import UserCard from '../../reusables/UserCard';
import { primaryColor } from '../../../settings';

import { getItemsById } from '../../../actions';
import Spinner from '../../../../native-base-theme/components/Spinner';

class ItemDetailScreen extends Component{
    constructor(props) {
        super(props);
            this.state = {
        };
        console.log(this.props.navigation.getParam('item'));
        this.props.getItemsById(this.props.navigation.getParam('item').id);
    }

    renderProgressBar() {
        // if(this.props.loading){
        //     return <Spinner size='small'/>;
        // }else return null;
    }

    renderItem(item){
        return(
            <Text style={styles.description}>
                {item.Inches + '\n' + item.ScreenResolution + '\n' +item.OpSys+ '\n' +item.Ram+ '\n' +item.TypeName}
            </Text>
        )
    }

    renderAdvanced(item) {
        if(item){
            return this.renderItem(item)
        }else if(this.props.itemAdv){
            return this.renderItem(this.props.itemAdv)
        }
    }
    
    render() {
        const item = this.props.navigation.getParam('item');
        const itemAdv = this.props.navigation.getParam('itemAdv');

        console.log(this.props);
        console.log(item, itemAdv);
        return (
            <Container style={{backgroundColor: '#ced5e0'}}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <ParallaxScrollView
                    backgroundColor={primaryColor}
                    parallaxHeaderHeight={300}
                    renderForeground={() => (
                        <Image 
                            style={styles.slideInnerContainer} 
                            source={item.thumbnail}
                            indicator={ProgressBar}
                            indicatorProps={{
                                size: 80,
                                borderWidth: 0,
                                color: '#ff8821',
                                unfilledColor: 'rgba(200, 200, 200, 0.2)'
                            }}
                        />
                    )}
                    stickyHeaderHeight={75}
                    renderStickyHeader={() => (
                        <ItemDetailScreenHeader 
                            leftIconName='ios-arrow-back'
                            onLeftButtonPress={() => this.props.navigation.goBack()}
                            headerTitle={item.Product}
                        />
                    )}
                    renderFixedHeader={() => (
                        <ItemDetailScreenHeader 
                            leftIconName='ios-arrow-back'
                            onLeftButtonPress={() => this.props.navigation.goBack()}
                            headerTitle={""}
                        />
                    )}
                >
                    <Card style={styles.itemContainer}>
                        <View style={styles.infoContainer}>
                            <H2 style={styles.title} font-size={21}>{item.title}</H2>
                            
                            <View style={{backgroundColor:'#e5e2da', width:null, height:1, marginTop:8, marginBottom:8}}></View>
                            
                            <Text>BASIC</Text>
                            <Text style={styles.description}>
                                    {item.Company + '\n' + item.Price_euros + '\n' +item.Memory+ '\n' +item.Cpu+ '\n' +item.Gpu}
                            </Text>

                            {this.renderProgressBar()}

                            <Text>ADVANCED</Text>
                            {this.renderAdvanced(itemAdv)}
                            
                            <ThumbnailList />
                        </View>
                    </Card>
                </ParallaxScrollView>
            </Container>
        );
    }

    _renderTruncatedFooter = (handlePress) => {
        return (
          <Text style={{color: '#ff8821', marginTop: 5}} onPress={handlePress}>
            Read more
          </Text>
        );
      }
    
      _renderRevealedFooter = (handlePress) => {
        return (
          <Text style={{color: primaryColor, marginTop: 5}} onPress={handlePress}>
            Show less
          </Text>
        );
      }
    
      _handleTextReady = () => {
        // ...
      }
}

const styles = {
    itemContainer: {
        flexWrap: "wrap",
        marginTop: 0,
        marginLeft: 2,
        marginRight: 2,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom: 10,
        marginBottom:15,
    },
    infoContainer: {
        flex: 1,
        marginTop:10,
        marginRight:5,
        flexDirection: 'column',
        width: null,
    },
    slideInnerContainer: {
        width: null,
        flex: 1,
        height: null,
        resizeMode: 'cover',
    },
    title:{
        color: '#4f5054',
        justifyContent: 'flex-start',
    },
    description:{
        marginTop:5,
        alignSelf: 'center',
        color: '#333438'
    },
    getItFromContainer:{
        marginTop:0,
        paddingBottom:20,
    },
    getItFromText:{
        color: '#514d47',
        justifyContent: 'flex-start',
        marginLeft:15,
        marginTop:10,
    }
}

mapStateToProps = (state) => {
    return({
        itemAdv: state.item.advItem,
        loading: state.item.loading 
    });
}

export default connect(mapStateToProps, {getItemsById})(ItemDetailScreen);