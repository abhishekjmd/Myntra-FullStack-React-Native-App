/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen'
import ExploreScreen from '../Screens/ExploreScreen'
import CategoriesScreen from '../Screens/CategoriesScreen';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='profile' component={ProfileScreen} />
                <Stack.Screen
                    name='Explore on Myntra' component={ExploreScreen} />
                <Stack.Screen
                    name='Categories' component=
                    {CategoriesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigation;