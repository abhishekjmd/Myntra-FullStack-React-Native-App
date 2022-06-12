/* eslint-disable prettier/prettier */
import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import StackNavigation from './src/NavigationHomeScreen/StackNavigation'

const App = () => {
  return (
    <View style={styles.root}>
        <StatusBar
        // translucent={true}
        backgroundColor={'gray'}
        barStyle='dark-content'
      />
      <StackNavigation />
    </View>
  )
}

export default App;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})