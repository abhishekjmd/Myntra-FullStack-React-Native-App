/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import NavigationHomeScreen from './NavigationHomeScreen';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='splash'
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='home'
                    component={NavigationHomeScreen}
                    options={{ headerShown: false }}

                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigation;