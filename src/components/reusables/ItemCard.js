import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { withNavigation } from 'react-navigation';
import { Icon, Button, StyleProvider, ListItem, Left, Right, Body, Content, Thumbnail} from 'native-base';

// Local Imports
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';

class ItemCard extends Component{
    render() {
        const {item, rightIconName} = this.props;
        return(
            <StyleProvider style={getTheme(platform)}>
            <ListItem avatar onPress={() => this.props.navigation.navigate('ItemDetail', {'item': item})}>
                <Left>
                    <Thumbnail square source={{uri: item.photo_url}} style={{height:80}}/>
                </Left>
                <Body>
                    <Text style={styles.bodyText}>{item.product}</Text>
                    <Text note>{item.company}</Text>
                    <Text note>{item.cpu}</Text>
                    <Text note>{item.memory}</Text>
                </Body>
                <Right>
                    <Button size={10} transparent>
                        <Icon style={{ padding: 0, }} name={rightIconName} color={'#ff8821'} />
                    </Button>
                </Right>
            </ListItem>
            </StyleProvider>
        );
    }
}

const styles= {
    bodyText:{
        fontSize:18,
        paddingTop:0,
        fontWeight:'400'
    }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(ItemCard);