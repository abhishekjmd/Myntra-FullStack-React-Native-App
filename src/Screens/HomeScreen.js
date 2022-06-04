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
  const Profilepreesed = () => {
    // console.warn("Home pressed")
    navigation.navigate('profile')
  }
   const ExplorePress = () => {
  //  console.warn('Explore pressed')
     navigation.navigate('Explore on Myntra')
 }
  const CategoriesPressed = () => {
    // console.warn('Categories pressed')
    navigation.navigate('Categories')
  }
  return (
    <View>
      <ToggleBar />
      <ScrollBar />
      <BottomMenu
        userPressed={Profilepreesed}
        ExplorePressed={ExplorePress}
        CategoriesPressed={CategoriesPressed}
      />
    </View>
  )
}

export default HomeScreen;
const styles = StyleSheet.create({})