import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
const TopCategories = ({ text, subtext, type, image, Press, iconRequire, subPress }) => {
    return (
        <View>
            <View style={[styles.mainContainer, styles[`mainContainer_${type}`]]}>
                <Pressable style={styles.colltext}
                    onPress={Press}

                >
                    <View
                        style={styles.uptxtContainer} >
                        <Text
                            style={styles.uptxt} > {text}
                        </Text>
                    </View>
                    <View style=
                        {styles.dwntxtContainer} >
                        <Text style={styles.dwntxt} >
                            {subtext}
                        </Text>
                    </View>
                </Pressable
                >
                <Pressable
                    onPress={subPress}>
                    <Entypo
                        name={iconRequire}
                        style={[styles.icon, styles[`icon_${type}`]]}
                        size={20}
                    />
                </Pressable>
                <Image
                    source={image}
                    style={[styles.image, styles[`image_${type}`]]}
                />
                
            </View>
        </View>
    )
}

export default TopCategories;

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
        backgroundColor: '#eaf0ad',
        alignItems: 'center',
        // justifyContent:'center',
    },
    icon: {
        bottom: 10,
        left: 10,
    },
    mainContainer_Primary1: {
        // flexDirection: 'row',
        width: '100%',
        height: 150,
        backgroundColor: '#f5edf7',
        // alignItems: 'center',
        // justifyContent:'center',
    },
    image_Primary1: {
        marginLeft: 30,
        width: 120,
        height: 140,
    },
    icon_Primary1: {
        bottom: 10,
        left: -80,
    },
    mainContainer_Primary2: {
        // flexDirection: 'row',
        width: '100%',
        height: 150,
        backgroundColor: '#fafaed',
        // alignItems: 'center',
        // justifyContent:'center',
    },
    image_Primary2: {
        marginLeft: 45,
        width: 90,
        height: 140,
    },
    icon_Primary2: {
        bottom: 10,
        left: -120,
    },
    mainContainer_Primary3: {
        // flexDirection: 'row',
        width: '100%',
        height: 150,
        backgroundColor: '#ede6ec',
        // alignItems: 'center',
        // justifyContent:'center',
    },
    image_Primary3: {
        marginLeft: 25,
        width: 140,
        height: 140,
    },
    icon_Primary3: {
        bottom: 10,
        left: -125,
    },
    mainContainer_Primary4: {
        // flexDirection: 'row',
        width: '100%',
        height: 150,
        backgroundColor: '#f1f5e4',
        // alignItems: 'center',
        // justifyContent:'center',
    },
    image_Primary4: {
        marginLeft: 25,
        width: 140,
        height: 120,
    },
    icon_Primary4: {
        bottom: 20,
        left: -50,
    },
    mainContainer_Primary5: {
        // flexDirection: 'row',
        width: '100%',
        height: 150,
        backgroundColor: '#f2f5f3',
        // alignItems: 'center',
        // justifyContent:'center',
    },
    image_Primary5: {
        marginLeft: 16,
        width: 140,
        height: 130,
    },
    icon_Primary5: {
        bottom: 10,
        left: -10,
    },
    mainContainer_Primary6: {
        // flexDirection: 'row',
        width: '100%',
        height: 150,
        backgroundColor: '#d5f5d9',
        // alignItems: 'center',
        // justifyContent:'center',
    },
    image_Primary6: {
        marginLeft: 35,
        width: 140,
        height: 130,
    },
    icon_Primary6: {
        bottom: 10,
        left: -5,
    },
    mainContainer_Primary7: {
        width: '100%',
        height: 150,
        backgroundColor: '#c5f5fa',
    },
    image_Primary7: {
        marginLeft: 70,
        width: 150,
        height: 130,
    },
    mainContainer_Primary8: {
        width: '100%',
        height: 150,
        backgroundColor: '#eaf0ad',
    },
    image_Primary8: {
        marginLeft: 75,
        width: 150,
        height: 130,
    },
    icon_Primary8: {
        bottom: 10,
        left: -5,
    },
    mainContainer_Primary9: {
        width: '100%',
        height: 150,
        backgroundColor: '#ede6ec',
    },
    image_Primary9: {
        marginLeft: 15,
        width: 150,
        height: 130,
    },
    icon_Primary9: {
        bottom: 10,
        left: 5,
    },
    mainContainer_Primary10: {
        width: '100%',
        height: 150,
        backgroundColor: '#d5f5e9',
    },
    image_Primary10: {
        marginLeft: 70,
        width: 170,
        height: 130,
    },
    mainContainer_Primary11: {
        width: '100%',
        height: 150,
        backgroundColor: '#d8ebed',
    },
    image_Primary11: {
        marginLeft: 30,
        width: 170,
        height: 130,
    },
    icon_Primary11: {
        bottom: 10,
        left: 5,
    },
    mainContainer_Primary12: {
        width: '100%',
        height: 150,
        backgroundColor: '#ededd8',
    },
    image_Primary12: {
        marginLeft: 1,
        width: 150,
        height: 120,
    },
    icon_Primary12: {
        bottom: 10,
        left: -15,
    },
    mainContainer_Primary13: {
        width: '100%',
        height: 150,
        backgroundColor: '#ebebeb',
    },
    image_Primary13: {
        marginLeft: 1,
        width: 150,
        height: 120,
    },
    icon_Primary13: {
        bottom: 10,
        left: -5,
    },
    colltext: {},
    uptxtContainer: {
        marginLeft: 20,
        // backgroundColor:'#000',
    },
    uptxt: {
        // flexDirection:'row',
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: '600',
    },
    dwntxtContainer: {
        marginLeft: 30,
    },
    dwntxt: {
        fontSize: 15,
        textTransform: 'capitalize',
    },
    image: {
        marginLeft: 30,
        width: 140,
        height: 140,
    },





})