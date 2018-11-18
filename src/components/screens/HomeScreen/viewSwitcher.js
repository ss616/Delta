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

        <Card
            style={styles.eQuoteContainer}
        >
            <ScrollView>
                {cards}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('EQuoteList')}>
                    <Text style={styles.headerText}>View More</Text>
                </TouchableOpacity>
            </ScrollView>
        </Card>
        </View>
    );
}


const styles = StyleSheet.create({
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
});