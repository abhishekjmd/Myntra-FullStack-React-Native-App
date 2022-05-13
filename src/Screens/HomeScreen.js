/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ToolBar from '../Components/ToolBar/Toolbar';
import BottomMenu from '../Components/Bottommenu/BottomMenu';
const HomeScreen = () => {
  return (
    <View>
      <ToolBar />
      <BottomMenu />
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({})