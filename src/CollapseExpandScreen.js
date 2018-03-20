import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { NavigationActions } from 'react-navigation';

class CollapseExpandScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Collapse Expand Screen',
      headerStyle: {
        backgroundColor: '#2980b9',
        height: 60,
      },
      headerTitleStyle: {
        color: 'white'
      },
    }

  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.textButton}>SCREEN</Text>
      </View>
    )
  }
}

export default CollapseExpandScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#8e44ad'
  },
  textButton: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    padding: 15
  }
})
