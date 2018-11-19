import React, { Component } from 'react';

import {
    Text, View
} from "react-native";

// Local Imports
import CategoryView from './CategoryView';
import EmployeeList from './EmployeeList';
import EQuotesView from './EQuotesView';
import FeaturedView from './FeaturedView';
import RecommendedView from './RecommendedView';

shopper=()=>{
    return <FeaturedView />
}

buyer=()=>{
    return <EQuotesView />
}

admin=()=>{
    return <EmployeeList />
}

callSwitch=(type)=>{
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

        <Text>{type}</Text>
                                
        <CategoryView />

        {this.callSwitch(type)}

        </View>
    );
}

