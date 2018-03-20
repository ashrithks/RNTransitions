import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { NavigationActions } from 'react-navigation';

class SlideFromRightScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Slide From Right Screen',
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

export default SlideFromRightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#c0392b'
  },
  textButton: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    padding: 15
  }
})
