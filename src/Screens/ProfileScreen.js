/* eslint-disable prettier/prettier */
//import liraries
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import LoginComponent from '../Components/ImportantComponents/LoginComponent';
import LowerPortion from '../Components/ProfileScreen Components/LowerPortion/LowerPortion';
import MiddlePortion from '../Components/ProfileScreen Components/MiddlePortion/MiddlePortion';
import UpperPortion from '../Components/ProfileScreen Components/UpperPortion/UpperPortion';

const ProfileScreen = () => {
    return (
        <ScrollView>
             <UpperPortion /> 
            <MiddlePortion
                text='Orders'
                Subtext='Check your order status'
                type='Primary'
                Icon='social-dropbox'
            />
            <MiddlePortion
                text='Help Center'
                Subtext='Help regarding your recent purchases'
                type='Secondary'
                Icon='support'

            />
            <MiddlePortion
                text='Wishlist'
                Subtext='Your most loved styles'
                type='Tertiary'
                Icon='heart'
            />
            <View style={styles.BorderColor} />
            <LowerPortion
                text='Scan for coupon'
                type='Primary'
                Icon='qrcode-scan'
            />
            <LowerPortion
                text='Refer & Earn'
                type='Secondary'
                Icon='heart-cog-outline'
            />
            <View style={styles.BorderColor} />
            <LowerPortion
                text='faqs'
                type='PrimaryQ'
                IconNeed='false'
            />
            <LowerPortion
                text='about us'
                type='PrimaryQ'
            />
            <LowerPortion
                text='faqs'
                type='PrimaryQ'
            />
            <LowerPortion
                text='terms of use'
                type='PrimaryQ'
            />
            <View style={styles.Footer}>
                <Text>
                    APP VERSION 4.2203.6
                </Text>
            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    BorderColor: {
        borderBottomWidth: 20,
        borderBottomColor: '#ededed',
    },
    Footer: {
        width: '100%',
        height: 120,
        backgroundColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

//make this component available to the app
export default ProfileScreen;
