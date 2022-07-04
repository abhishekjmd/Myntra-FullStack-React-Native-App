/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Screens imports
import SplashScreen from '../Screens/SplashScreen';
import NavigationHomeScreen from './NavigationHomeScreen';
import NotificationScreen from '../Screens/TopBarScreens/NotificationScreen';
import FavouritesScreen from '../Screens/TopBarScreens/FavouritesScreen';

const SplashScreenNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
               {/* <Stack.Screen
                    name='splash'
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
    */}
                <Stack.Screen
                    name='Home'
                    component={NavigationHomeScreen}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name='NotificationScreen'
                    component={NotificationScreen}
                />
                <Stack.Screen
                    name='Favourites'
                    component={FavouritesScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default SplashScreenNavigation;