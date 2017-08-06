/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
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

export default class WaveFun extends PureComponent {

  componentWillMount() {
    this.animatedHeightValue = new Animated.Value(100)
    this.animatedWidthValue = new Animated.Value(10)
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.animatedHeightValue, {
        toValue: screenHeight,
        duration: 3000,
        easing: Easing.bounce
      }),
      Animated.timing(this.animatedWidthValue, {
        toValue: screenWidth,
        duration: 1000,
        easing: Easing.bounce
      })
    ]).start()
  }

  render() {
    const animatedStyle = { height: this.animatedHeightValue, width: this.animatedWidthValue }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <SinWave />

          <Image source={require('./infinite_red.png')} />

          <SinWave
            flat
            fade
            dotCount={50}
            delayGap={200}
            period={3000}
            style={{backgroundColor: '#feffff'}}
          />
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
    backgroundColor: '#c93939',
    height: 100,
    width: 100,
    overflow: 'hidden'
  },
})

AppRegistry.registerComponent('WaveFun', () => WaveFun);
