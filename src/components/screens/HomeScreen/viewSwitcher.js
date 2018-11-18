import React, { Component } from 'react';

import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image, Text, View
} from "react-native";

// Local Imports
import HomeScreenHeader from './HomeScreenHeader';
import CategoryView from './CategoryView';
import EmployeeList from './EmployeeList';
import { primaryColor } from '../../../settings';
import FeaturedView from './FeaturedView';


export default viewSwitcher = (type) => {
    return(
        <View>

        <Text>{type}</Text>
                                
        <CategoryView />

        <FeaturedView />
        
        <EmployeeList />
        </View>
    );
}