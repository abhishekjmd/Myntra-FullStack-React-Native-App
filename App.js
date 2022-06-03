/* eslint-disable prettier/prettier */
import { View, StyleSheet,StatusBar } from 'react-native'
import React from 'react'
import NavigationHomeScreen from './src/NavigationHomeScreen/NavigationHomeScreen'
import ProfileScreen from './src/Screens/ProfileScreen'
import ExploreScreen from './src/Screens/ExploreScreen'
const App = () => {
  return (
    <View style={styles.root}>
      <StatusBar 
      // translucent={true}
      backgroundColor={'gray'}
      barStyle='dark-content'
      />
      {/*
      // <ExploreScreen />
  */}
      <NavigationHomeScreen />
    </View>
  )
}

export default App;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor:'white',
  },
})