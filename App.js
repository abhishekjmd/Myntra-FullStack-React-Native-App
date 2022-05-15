/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/Screens/HomeScreen'
import ScrollBar from './src/Components/ScrollBar/ScrollBar'
import BottomMenu from './src/Components/Bottommenu/BottomMenu'

ScrollBar
const App = () => {
  return (
    <View>
      <HomeScreen />
      {/* <BottomMenu /> */}
      {/* <ScrollBar /> */}
    </View>
  )
}

export default App