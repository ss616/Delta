import React, { Component } from 'react';

import {
    Text, View
} from "react-native";

// Local Imports
import CategoryView from './CategoryView';
import UserView from './UserView';
import OrdersView from './OrdersView';
import EQuotesView from './EQuotesView';
import FeaturedView from './FeaturedView';
import RecommendedView from './RecommendedView';
import FeaturedCard from '../../reusables/FeaturedCard';
import SuggestedView from './SuggestedView';
import { suggestedList } from '../../../settings';

shopper=()=>{
    return (
    <View>
        <FeaturedView />
        <RecommendedView/>
        <SuggestedView list = {suggestedList}/>
    </View>
    );
}

buyer=()=>{
    return (
    <View>
        <EQuotesView />
        <OrdersView />
    </View>
    )
}

admin=()=>{
    return (
        <View>
            <UserView />
            <FeaturedCard 
                item={
                    {
                        title: 'Budget Burndown Chart',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        thumbnail: {uri: 'https://cdn.elearningindustry.com/wp-content/uploads/2017/11/1a4f191a96141df4ee9aebd6475999f6.png'}
                    }
                }
            />
        </View>
    )
}

callSwitch=(type)=>{
    console.log('switch')
    switch(type) {
        case 'Shopper':
            return this.shopper();
            break;
        case 'Buyer':
            return this.buyer();
            break;
        case 'Admin':
            return this.admin();
            break;
    }
}

export default viewSwitcher = (type) => {
    
    return(
        <View>
                                
        <CategoryView />

        {this.callSwitch(type)}

        </View>
    );
}

