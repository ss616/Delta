import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { withNavigation } from 'react-navigation';
import { Icon, Button, StyleProvider, ListItem, Card, Left, Right, Body, Content, Thumbnail} from 'native-base';

// Local Imports
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';

class EQuoteCard extends Component{
    render() {
        const {item} = this.props;
        console.log(item);
        return(
            
                <StyleProvider style={getTheme(platform)}>
                <Card>
                <ListItem avatar onPress={() => this.props.navigation.navigate('Home', {'eQuote': item})}>
                <Left>
                    <Thumbnail square source={item.thumbnail} />
                </Left>
                <Body>
                    <Text note>{item.title}</Text>
                    <Text note>{item.expiry_date}</Text>
                    <Text note>{item.subtitle}</Text>
                    <Text note>{item.shopper}</Text>
                </Body>
                <Right>
                    <Thumbnail source={item.user_thumbnail} borderRadius={7} resizeMode='cover' />
                </Right>
            </ListItem>
            </Card>
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
export default withNavigation(EQuoteCard);