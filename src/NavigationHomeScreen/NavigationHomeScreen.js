/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen'
import ExploreScreen from '../Screens/ExploreScreen'
const Stack = createNativeStackNavigator();
const NavigationHomeScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='profile' component={ProfileScreen} />
                <Stack.Screen 
                name='Explore on Myntra' component={ExploreScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default NavigationHomeScreen;