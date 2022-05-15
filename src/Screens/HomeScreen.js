/* eslint-disable prettier/prettier */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import BottomMenu from '../Components/Bottommenu/BottomMenu';
import ToggleBar from '../Components/ToggleBar/ToggleBar';
const HomeScreen = () => {
  return (
    <View>
      <ToggleBar />
      <BottomMenu />
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({})