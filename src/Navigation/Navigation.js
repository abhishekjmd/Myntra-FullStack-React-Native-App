/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from '../Screens/HomeScreen';
import ToggleBar from '../Components/ToggleBar/ToggleBar';
import Toolbar from '../Components/ToolBar/Toolbar';
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Toggle' component=
                    {ToggleBar} />
                <Stack.Screen name='Toolbar' component={Toolbar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navigation;