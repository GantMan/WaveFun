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

export default class SinWave extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
  }

  animateDown = (val) => Animated.timing(val, {
    toValue: 30,
    duration: 3000,
    useNativeDriver: true
  })

  animateUp = (val) => Animated.timing(val, {
    toValue: 0,
    duration: 3000,
    useNativeDriver: true
  })

  componentDidMount() {
    animateDown = {
      toValue: 30,
      duration: 3000,
      delay: 5000,
      useNativeDriver: true
    }
    Animated.timing(this.animatedValue, animateDown).start(endState => {
      Animated.timing(this.animatedValue, {toValue: 0, duration: 3000, useNativeDriver: true}).start()
    })
  }

  renderDots () {
    const animatedStyle = { transform: [{translateY: this.animatedValue}] }
    return (
      <View style={{flexDirection: 'row'}}>
        <Animated.View style={[styles.circle, animatedStyle]} />
        <Animated.View style={[styles.circle]} />
        <Animated.View style={[styles.circle]} />
        <Animated.View style={[styles.circle]} />
        <Animated.View style={[styles.circle]} />
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