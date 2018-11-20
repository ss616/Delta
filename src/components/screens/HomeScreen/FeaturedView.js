import React, { Component } from 'react';
import { Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import FeaturedCard from '../../reusables/FeaturedCard';    

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;

class FeaturedView extends Component {

    state = {
        entries: [
            {
                title: 'Black Friday Laptop Deals',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                thumbnail: {uri: 'https://cdn.mos.cms.futurecdn.net/KrwqzWQ295WLMwDghu42q8.jpg'},  
            },
            {
                title: 'Flippy Laptop',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                thumbnail: {uri: 'https://i.dell.com/sites/imagecontent/consumer/merchandizing/en/PublishingImages/magnum-category/Black-friday-laptops.jpg'}
            },
            {
                title: 'Dell Black Friday Deals',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                thumbnail: {uri: 'https://zdnet1.cbsistatic.com/hub/i/2016/11/02/82a0cb2c-cb26-403a-b6ab-1526fabdb2e8/7c05edd2f850892ed76c9263e8dd807e/black-friday-2016-dell-laptop-notebook-desktop-pc-inspiron.jpg'}
            },
            {
                title: 'Art Laptop',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                thumbnail: {uri: 'https://cdnssl.ubergizmo.com/wp-content/uploads/2018/01/Dell-XPS-13-2018-9370-11.jpg'}
            },
            {
                title: 'Dell Ultrabook',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                thumbnail: {uri: 'https://media-assets-03.thedrum.com/cache/images/thedrum-prod/public-drum_basic_article-89152-main_images-xps-13_dell--default--905.png'}
            },
            {
                title: 'Alienware',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                thumbnail: {uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bac15b22938015.5631ab604a54a.png'}
            },
        ]
    };
    
    _renderItem ({item, index}) {
        return (
            <FeaturedCard 
                item={item}
            />
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              firstItem={3}
              hasParallaxImages={true}
              loop={true}
              inactiveSlideScale={0.95}
              autoplay={true}
              lockScrollWhileSnapping={true}
            />
        );
    }
}

export default FeaturedView;