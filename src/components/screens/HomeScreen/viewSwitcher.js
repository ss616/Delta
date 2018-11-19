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
            this.shopper();
            break;
        case 'Buyer':
            this.buyer();
            break;
        case 'Admin':
            this.admin();
            break;
    }
}

export default viewSwitcher = (type) => {
    
    return(
        <View>

        <Text>{type}</Text>
                                
        <CategoryView />

        {callSwitch(type)}

        </View>
    );
}

