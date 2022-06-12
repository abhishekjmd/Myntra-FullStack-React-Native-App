/* eslint-disable prettier/prettier */
import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import SplashScreenNavigation from './src/NavigationHomeScreen/SplashScreenNavigation'

const App = () => {
  return (
    <View style={styles.root}>
        <StatusBar
        // translucent={true}
        backgroundColor={'gray'}
        barStyle='dark-content'
      />
      <SplashScreenNavigation />
    </View>
  )
}

export default App;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})