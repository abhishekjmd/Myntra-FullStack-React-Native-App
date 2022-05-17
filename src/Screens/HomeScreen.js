/* eslint-disable prettier/prettier */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import BottomMenu from '../Components/HomeScreenComponent/Bottommenu/BottomMenu';
import ToggleBar from '../Components/HomeScreenComponent/ToggleBar/ToggleBar';
import ScrollBar from '../Components/HomeScreenComponent/ScrollBar/ScrollBar'
import ProfileScreen from '../Screens/ProfileScreen';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const Homepreesed = () => {
    console.warn("Home pressed")
    navigation.navigate('profile')
  }
  return (
    <View>
      <ToggleBar />
      <ScrollBar />
      <BottomMenu
        userPressed={Homepreesed}
      />
    </View>
  )
}

export default HomeScreen;
const styles = StyleSheet.create({})