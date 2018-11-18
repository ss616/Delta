import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {Card, List, H3} from 'native-base';

import UserCard from '../../reusables/UserCard';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card style={styles.cardContainer}>
        <H3 style={styles.cardTitle} font-size={10}>
            Employees
        </H3>
        <List>
            <UserCard
                name='Sooryanarayanan'
                thumbnail={require('../../../assets/gpu.jpg')}
                subtitle='Buyer'
                rightIconName='ios-share-alt'
                onRightButtonPress={()=>console.log('request')}
            />
            <UserCard
                name='Hiran PY'
                thumbnail={require('../../../assets/desktop.jpg')}
                subtitle='Shopper'
                rightIconName='ios-share-alt'
                onRightButtonPress={()=>console.log('request')}
                />
        </List>
      </Card>
    );
  }
}

const styles = {
  cardContainer:{
      marginTop:0,
      paddingBottom:20,
  },
  cardTitle:{
      color: '#514d47',
      justifyContent: 'flex-start',
      marginLeft:15,
      marginTop:10,
  }
}

export default EmployeeList;
