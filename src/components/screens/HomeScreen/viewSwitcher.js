import React, { Component } from 'react';

import {
    Text, View
} from "react-native";

// Local Imports
import CategoryView from './CategoryView';
import UserView from './UserView';
import EQuotesView from './EQuotesView';
import FeaturedView from './FeaturedView';
import RecommendedView from './RecommendedView';

shopper=()=>{
    console.log("Featured")
    return (
    <View>
        <FeaturedView />
        <RecommendedView />
    </View>
    );
}

buyer=()=>{
    console.log("zc sbuyc")
    return <EQuotesView />
}

admin=()=>{
    return <UserView />
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

