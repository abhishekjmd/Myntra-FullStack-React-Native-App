/* eslint-disable prettier/prettier */
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import SplashScreenNavigation from './src/NavigationHomeScreen/SplashScreenNavigation'
import CategoriesScreen from './src/Screens/CategoriesScreen'
import ProductScreen from './src/Screens/NestedScreens/ProductScreen'
const App = () => {
  return (
    <View style={styles.root}>
      <ProductScreen />
    </View>
  )
}

export default App;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})