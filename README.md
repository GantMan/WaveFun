# WaveFun
Just messing around with React Native animation.  Hopefully some of the lessons shared in here will help someone else looking to mess with animation as well.

## Update:
After watching Jason Brown's React Native animation videos ([buy them here](https://reactnativeanimations.com/)), I've fixed the wave animation to be _much_ cleaner and simpler ([but in a separate repo](https://github.com/GantMan/useless-things/blob/master/lib/sinWave.js)).  Kudos to Jason for making such a great educational series.

![obligatory gif](./wave.gif)

### Things that are bad about the sine wave version here:
* `useNativeDriver: true` should work for the sine wave, but it doesn't - [issue #3](https://github.com/GantMan/WaveFun/issues/3).  This is due to accessing a private variable that doesn't get updated in native.  This is fixed in the alternate code base.
* Sine doesn't keep shape over long periods of time due to not being actual `Math.sin` driven

These issues are significantly improved in the updated code... blog material?
