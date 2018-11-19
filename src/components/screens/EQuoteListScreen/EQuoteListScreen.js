import React, { Component } from 'react';

import {
    View,
    StatusBar,
    TouchableOpacity, ScrollView,
    SafeAreaView,
} from 'react-native';

// External Library imports
import { Container, Text, Content} from 'native-base';
import { withNavigation } from 'react-navigation';

import { getQuotes } from '../../../actions/ItemActions'

import Icon from 'react-native-vector-icons/Ionicons';

// Local Imports
import EQuoteListScreenHeader from './EQuoteListScreenHeader';
import EQuoteCard from '../../reusables/EQuoteCard';

class EQuoteListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.props.getQuotes();
    }
    
    renderItems() {
        return this.props.list.map((item) => {
            return (
                <EQuoteCard 
                        key={item.expiry_date}
                        item={item}
                    />
            );
        });
    }
    
    render(){
        return(
            <Container>
                <EQuoteListScreenHeader 
                            leftIconName='ios-arrow-back'
                            onLeftButtonPress={() => this.props.navigation.goBack()}
                            headerTitle='Quotes'
                />

                <View style={styles.headerViewContainer}>
                    <View style={styles.headerLeftView} >
                        <TouchableOpacity activeOpacity={0.9}
                        >
                            <Icon name='ios-apps' size={40} paddingTop={5} style={styles.gridIconContainerStyle} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerRightViews} >
                        <TouchableOpacity activeOpacity={0.9}
                        //onPress
                        >
                            <Icon name='md-funnel' size={30} style={styles.iconContainerStyle} >
                            <Text > Sort </Text>
                            </Icon>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerRightViews} >
                        <TouchableOpacity activeOpacity={0.9}
                        //onPress
                        >
                            <Icon name='ios-funnel' size={30} style={styles.iconContainerStyle} >
                            <Text> Filter </Text>
                            </Icon>
                        </TouchableOpacity>
                    </View>

                </View>
                <Content >
                    <SafeAreaView style={{ flex: 1 }}>
                        <ScrollView>
                            {this.renderItems()}
                        </ScrollView>
                    </SafeAreaView>
                </Content>
            </Container>
        );
    }
}
export default withNavigation(EQuoteListScreen);
const styles= {
    headerViewContainer:{
        flexDirection: 'row',
        borderBottomColor: '#D3D3D3',
        marginBottom: 3,
        height: 45
    },
    headerLeftView:{
        flex: 1,
        height:45,
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
        borderRightColor: '#D3D3D3',
        alignItems: 'center'
    },
    headerRightViews:{
        height:45,
        borderRightColor: '#D3D3D3',
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainerStyle:{
        color: '#003366',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
    },
    gridIconContainerStyle:{
        color: '#003366',
        flexDirection: 'row',
        alignItems: 'center',
    }
}

const mapStateToProps = state => {
    return({
        error: state.auth.error,
        loading: state.auth.loading,
        list: state.item.data,
    });
}
// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default connect(mapStateToProps, { getQuotes })(withNavigation(EQuotesListScreen));;