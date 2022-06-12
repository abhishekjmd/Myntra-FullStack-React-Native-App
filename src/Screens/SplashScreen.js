import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import NavigationHomeScreen from '../NavigationHomeScreen/NavigationHomeScreen';
import { useNavigation } from '@react-navigation/native';
const openApp = ()=>{
    <View>
    <NavigationHomeScreen />
    </View>
}

const SplashScreen = () => {
    const navigation = useNavigation(); 
    setTimeout(() => {
         navigation.navigate('Home')
        }, 3000);
    return (
        <View style={styles.mainContainer} >
            <Image source={require('../../Myntra_logo.png')}
                style={styles.Image}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        width: 200,
        height: 140,
    }
})