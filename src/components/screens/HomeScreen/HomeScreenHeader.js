import React, { Component } from 'react';
import { View, Text } from 'react-native';

// External Library imports
import { Button, Header, Item, Input, Left, Body, Title, Right, StyleProvider } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

// Local Imports
import getTheme from '../../../../native-base-theme/components';
import {getThemeFromColor} from '../../../../native-base-theme/variables/material';

/**
 * The props for this Header =>
 * 1.onLeftButtonPress
 * 2.onRightButtonPress
 * 3.searchPlaceholder
 * 4.color
 */
export default class HomeScreenHeader extends Component {
    
    render() {
        return(
            <StyleProvider style={getTheme(getThemeFromColor(this.props.color))}>
                <View>
                    <Header noShadow style={{ borderBottomWidth: 0, elevation: 0 }}>
                        <Left>
                            {this.props.leftIcon}
                        </Left>
                        <Body>
                            <Title>Delta</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={this.props.onRightButtonPress}>
                                <Icon name={this.props.rightIconName} size={25} color={'white'} />
                            </Button>
                        </Right>
                    </Header>
                    <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" size={20} style={{ paddingLeft: 10, marginRight: 10 }} />
                            <Input placeholder={this.props.searchPlaceholder} />
                        </Item>
                        <Button transparent>
                            <Text>Search</Text>
                        </Button>
                    </Header>
                </View>
            </StyleProvider>
        );
    }
}