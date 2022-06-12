/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimoleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const Toolbar = ({ pressed, NotificationPressed, FavouriteScreenPressed }) => {
    return (
        <View style={styles.mainContainer} >
            <View style={styles.firstContainer} >
                <Ionicons
                    name='menu'
                    size={35}
                    color="black"
                    style={styles.ficon}
                    onPress={pressed}
                />
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png' }}
                 style={styles.logo}
                />
                <View style={styles.textContainer} >
                    <Text style={styles.text}>Become</Text>
                    <Text style={styles.subtext}>Insider</Text>
                </View>
                <View style={styles.iconsContainer} >
                    <Ionicons name='search-outline'
                        size={25} style={styles.icon}
                    />
                    <SimoleLineIcons name='bell'
                        size={25} style={styles.icon}
                        onPress={NotificationPressed}
                    />
                    <SimoleLineIcons name='heart'
                        size={25} style={styles.icon}
                        onPress={FavouriteScreenPressed}
                    />
                    <SimoleLineIcons name='bag'
                        size={25} style={styles.icon}
                    />
                </View>
            </View>
        </View>
    )
}
export default Toolbar;
const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    firstContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ficon: {
        paddingRight: 12,
        color: '#383734',
    },

    logo: {
        width: 35,
        height: 23,
    },
    textContainer: {
        marginLeft: 5,
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 12,
    },
    subtext: {
        bottom: 2,
        textTransform: 'uppercase',
        color: '#FFD700',
    },
    iconsContainer: {
        flexDirection: 'row',
        marginLeft: 33,
        width: 200,
        justifyContent: 'space-between',
    },
    icon: {
        color: 'black',
    },
})