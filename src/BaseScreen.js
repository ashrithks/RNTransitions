import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { NavigationActions } from 'react-navigation';

class BaseScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Base Screen',
            headerStyle: {
                backgroundColor: '#2980b9',
                height: 60,
            },
            headerTitleStyle: {
                color: 'white'
            },
        }

    }

    moveToSlideFromRight = () => {
        this.props.navigation.navigate('SlideFromRight');
    }

    moveToExpand = () => {
        this.props.navigation.navigate('CollapseExpand', { transition: 'collapseExpand' });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.moveToSlideFromRight}><Text style={styles.textButton}>SLIDE FROM RIGHT SCREEN</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.moveToExpand}><Text style={styles.textButton}>EXPAND SCREEN</Text></TouchableOpacity>
            </View>
        )
    }
}

export default BaseScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: '#f39c12'
    },
    textButton: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        padding: 15
    }
})
