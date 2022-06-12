/* eslint-disable prettier/prettier */
import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
// Imported Screens

import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen'
import ExploreScreen from '../Screens/ExploreScreen'
import CategoriesScreen from '../Screens/CategoriesScreen';
import StudioScreen from '../Screens/StudioScreen'
// Icons files

import SimoleLineIcons from
    'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from
    'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';


const NavigationHomeScreen = () => {
    return (
        <NavigationContainer independent={true} >
            <Tab.Navigator
                screenOptions={
                    {
                        "tabBarShowLabel": false,
                        "tabBarStyle": [{
                            height: 65,
                        }]
                    }
                }
            >
                <Tab.Screen name='home' component={HomeScreen} options={{
                    headerShown: false, tabBarIcon: () => (
                        <View>
                            <Image source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png'
                            }}
                                style={styles.logo} />
                            <Text style={styles.icontext}>Home</Text>

                        </View>
                    ),
                }}
                />
                <Tab.Screen
                    name='Categories' component=
                    {CategoriesScreen}
                    options={{
                        tabBarIcon: () => (
                            <View style={styles.iconContainer}>
                                <AntDesign
                                    size={20}
                                    name="appstore-o"
                                    style={styles.icon}
                                />
                                <Text style={styles.icontext}> Categories </Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen name='studio' component={StudioScreen}
                    options={{
                        tabBarIcon: () => (
                            <View
                                style={styles.iconContainer}>
                                <Feather
                                    size={20}
                                    name="tv"
                                    style={styles.icon}
                                />
                                <Text style=
                                    {styles.icontext}
                                >
                                    Studio
                                </Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name='Explore on Myntra' component={ExploreScreen}
                    options={{
                        tabBarIcon: () => (
                            <View
                                style={styles.iconContainer}>
                                <MaterialCommunityIcons
                                    size={25}
                                    name="atom"
                                    style={styles.icon}
                                />
                                <Text style={styles.icontext}> Explore </Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    component={ProfileScreen}
                    name='profile'
                    options={{
                        tabBarIcon: () => (
                            <View style={styles.iconContainer}>
                                <SimoleLineIcons
                                    size={20}
                                    name="user"
                                    style={styles.icon}
                                />
                                <Text style={styles.icontext}>
                                    Profile </Text>
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default NavigationHomeScreen;
const styles = StyleSheet.create({
    logo: {
        width: 35,
        height: 23,
        tintColor: '#e00bcf',
    },
    icontext: {
        // color: focused ? '#e00bcf' : 'black',
        color: 'black'
    },
    icon: {
        color: 'black',
        // tintColor: focused ? '#e00bcf' : 'black'
        // tintColor: '#e00bcf',

    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})