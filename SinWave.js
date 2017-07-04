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

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const animateSin = (val) => {
  // access private value of animated ewwwww
  const toValue = val._value === 0 ? 30 : 0
  Animated.timing(val, {
    toValue,
    duration: 1000
  }).start(endState => {
    animateSin(val)
  })
}

export default class SinWave extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount() {
    animateDown = {
      toValue: 30,
      duration: 1000,
      delay: 1000
    }

    animateSin(this.animatedValue)
  }

  renderDots () {
    const animatedStyle = { transform: [{translateY: this.animatedValue}] }
    return (
      <View style={{flexDirection: 'row'}}>
        <Animated.View style={[styles.circle, animatedStyle]} />
        <Animated.View style={[styles.circle, animatedStyle]} />
        <Animated.View style={[styles.circle, animatedStyle]} />
        <Animated.View style={[styles.circle, animatedStyle]} />
        <Animated.View style={[styles.circle, animatedStyle]} />
      </View>
    )
  }

  render () {
    return this.renderDots()
  }
}

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 10,
    width: 10,
    borderRadius: 10/2
  },
})