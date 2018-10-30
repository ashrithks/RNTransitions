import React, { Component } from 'react'
import {
  Animated,
  Easing,
  Platform
} from 'react-native'
import BaseScreen from './BaseScreen';
import SlideFromRightScreen from './SlideFromRightScreen';
import CollapseExpandScreen from './CollapseExpandScreen';
import { createStackNavigator } from 'react-navigation';

let CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1]),
  });

  return {
    opacity,
    transform: [
      { scaleY }
    ]
  };
};

let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  })
  const slideFromRight = { transform: [{ translateX }] }
  return slideFromRight
};

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
        collapseExpand: CollapseExpand(index, position),
        default: SlideFromRight(index, position, width),
      }[transition];
    },
  }
}



const App = createStackNavigator({
  SlideFromRight: { screen: SlideFromRightScreen },
  Base: { screen: BaseScreen },
  CollapseExpand: { screen: CollapseExpandScreen }
}, {
    initialRouteName: 'Base',
    headerMode: "screen",
    mode: Platform.OS === "ios" ? "modal" : "card",
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false
      },
      gesturesEnabled: false
    },
    gesturesEnabled: false,
    transitionConfig: TransitionConfiguration,
  })

export default App
