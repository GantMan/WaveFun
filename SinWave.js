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

const defaultDotSize = 10

export default class SinWave extends PureComponent {

  componentWillMount() {
    this.animatedArray = []

    for (let i = 0; i < this.props.dotCount; i++) {
      this.animatedArray.push(new Animated.Value(0))
      this.animateSin(this.animatedArray[i], i)
    }
  }

  animateSin = (val, index) => {
    const {delayGap, crest, period} = this.props
    // access private value of animated ewwwww
    const toValue = val._value === 0 ? crest : 0
    const delay = index * delayGap
    Animated.timing(val, {
      toValue,
      delay,
      duration: period/2,
      // useNativeDriver: true
    }).start(endState => {
      this.animateSin(val)
    })
  }

  render = () =>
    <View style={{flexDirection: 'row'}}>
      {
        this.animatedArray.map((val, index) => {
          const {fade, flat, dotCount} = this.props
          const gradient = fade ? index/dotCount : 1
          const flatten = flat ?
            { height: gradient * 5 } :
            {}
          const animatedStyle = {
            ...flatten,
            transform: [{translateY: val}],
            opacity: gradient
          }
          return (
            <Animated.View key={`dot${index}`} style={[styles.circle, animatedStyle, this.props.style]} />
          )
        })
      }
    </View>
}

SinWave.defaultProps = {
  dotCount: 5,
  delayGap: 400,
  crest: -30,
  flat: false,
  fade: false,
  period: 2000
}

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: defaultDotSize,
    width: defaultDotSize,
    borderRadius: defaultDotSize/2
  },
})