/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  Dimensions
} from 'react-native'
import SinWave from './SinWave'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default class WaveFun extends Component {

  componentWillMount() {
    this.animatedHeightValue = new Animated.Value(100)
    this.animatedWidthValue = new Animated.Value(10)
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.animatedHeightValue, {
        toValue: screenHeight,
        duration: 300,
        easing: Easing.bounce
      }),
      Animated.timing(this.animatedWidthValue, {
        toValue: screenWidth,
        duration: 100,
        easing: Easing.bounce
      })
    ]).start()
  }

  render() {
    const animatedStyle = { height: this.animatedHeightValue, width: this.animatedWidthValue }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Image source={require('./infinite_red.png')} />
          <SinWave />
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C53938',
    height: 100,
    width: 100,
    overflow: 'hidden'
  },
})

AppRegistry.registerComponent('WaveFun', () => WaveFun);
