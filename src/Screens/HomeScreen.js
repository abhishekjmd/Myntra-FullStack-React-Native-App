/* eslint-disable prettier/prettier */
import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import ToggleBar from '../Components/HomeScreenComponent/ToggleBar/ToggleBar';
import ScrollBar from '../Components/HomeScreenComponent/ScrollBar/ScrollBar'
import { useNavigation } from '@react-navigation/native';
import Imagebtn from '../Components/HomeScreenComponent/MainHomeComponent/ImageBtncomponents/Imagebtn';
const HomeScreen = () => {
  const navigation = useNavigation();
  const Profilepreesed = () => {
    // console.warn("Home pressed")
    // my name is abhishek  tiwari
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
  const FavouriteScreenBtnPressed = () => {
    // console.warn('Categories pressed')
    navigation.navigate('Favourites')
  }
  const NotificationbtnPressed = () => {
    // console.warn('Categories pressed')
    navigation.navigate('NotificationScreen')
  }
  return (
      <ScrollView>
      <View>
        <ToggleBar
          NotificationPressed={NotificationbtnPressed}
          FavouriteScreenPressed={FavouriteScreenBtnPressed}
        />
         <ScrollBar />
        <Imagebtn />
      </View>
      </ScrollView>
    
  )
}

export default HomeScreen;
const styles = StyleSheet.create({})