/* eslint-disable prettier/prettier */
import { View, StyleSheet,StatusBar } from 'react-native'
import React from 'react'
import Navigation from './src/Navigation/index'
import ProfileScreen from './src/Screens/ProfileScreen'
const App = () => {
  return (
    <View style={styles.root}>
      <StatusBar 
      // translucent={true}
      backgroundColor={'gray'}
      barStyle='dark-content'
      />
      <Navigation />
    </View>
  )
}

export default App;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})