/* eslint-disable prettier/prettier */
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import SplashScreenNavigation from './src/NavigationHomeScreen/SplashScreenNavigation'

const App = () => {
  return (
    <View style={styles.root}>
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