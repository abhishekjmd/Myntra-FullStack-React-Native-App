/* eslint-disable prettier/prettier */
//import liraries
import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import LowerScreen from '../Components/ProfileScreen Components/LowerScreen/LowerScreen';
import Upperscreen from '../Components/ProfileScreen Components/UpperScreen/Upperscreen';

const ProfileScreen = () => {
    return (
        <ScrollView >
            <Upperscreen />
            <LowerScreen />
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
});

//make this component available to the app
export default ProfileScreen;
