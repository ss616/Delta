import React, { Component } from 'react';

import {
    StyleSheet,
    SafeAreaView,
    Image, Text, View
} from "react-native";

// Local Imports
import HomeScreenHeader from './HomeScreenHeader';
import CategoryView from './CategoryView';
import EmployeeList from './EmployeeList';
import EQuotesView from './EQuotesView';
import FeaturedView from './FeaturedView';


export default viewSwitcher = (type) => {
    return(
        <View>

        <Text>{type}</Text>
                                
        <CategoryView />

        <FeaturedView />
        
        <EmployeeList />

        <EQuotesView />
        
        </View>
    );
}

