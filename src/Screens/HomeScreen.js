/* eslint-disable prettier/prettier */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import BottomMenu from '../Components/Bottommenu/BottomMenu';
import ToggleBar from '../Components/ToggleBar/ToggleBar';
import ScrollBar from '../Components/ScrollBar/ScrollBar'
const HomeScreen = () => {
  return (
    <View>
      <ToggleBar />
      <ScrollBar />
      <BottomMenu />
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({})