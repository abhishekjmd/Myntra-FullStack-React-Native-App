/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SimoleLineIcons from
  'react-native-vector-icons/SimpleLineIcons';
const BottomMenu = () => {
  const Homepreesed = () => {
    console.warn("Home pressed")
  }
  const UserPressed = () => {
    console.warn('profile pressed')
  }
  const CategoriesPressed = () => {
    console.warn('Categories pressed')
  }
  const StudioPressed = () => {
    console.warn('Studio pressed')
  }
  const ExplorePressed = () => {
    console.warn('Explore pressed')
  }

  return (
    <View style={styles.mainContainer} >
      <View style={styles.subContainer} >
        <Pressable
          onPress={Homepreesed}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png' }}
          style={styles.logo} />
          <Text style={styles.icontext}>Home</Text>
        </Pressable>
        <Pressable style={styles.iconContainer}
          onPress={CategoriesPressed} >
          <AntDesign 
          size={20} 
          name="appstore-o"
          style={styles.icon}
          />
          <Text style={styles.icontext}> Categories </Text>
        </Pressable>
        <Pressable 
          style={styles.iconContainer}
          onPress={StudioPressed} 
          >
          <Feather 
          size={20} 
          name="tv"
          style={styles.icon}
          />
          <Text style={styles.icontext}> Studio </Text>
        </Pressable>
        <Pressable 
        style={styles.iconContainer}
        onPress={ExplorePressed}
        >
          <AntDesign 
          size={20} 
          name="find"
          style={styles.icon}
          />
          <Text style={styles.icontext}> Explore </Text>
        </Pressable>
        <Pressable
        style={styles.iconContainer}
        onPress={UserPressed}
        >
          <SimoleLineIcons size={20} name="user"
            style={styles.icon}
          />
          <Text style={styles.icontext} > Profile </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default BottomMenu

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    height: 70,
    top: 606,
    justifyContent: 'center',
  },
  subContainer: {
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 35,
    height: 23,
    tintColor: '#e00bcf',
  },
  icon: {
    color: 'black',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icontext: {
    color: 'black',
  }
})