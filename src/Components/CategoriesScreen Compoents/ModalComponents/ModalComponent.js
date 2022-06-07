import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import TopCategories from '../TopCategoriesComponents/TopCategories';

const ModalComponent = ({ text, iconRequire, type,iconPressed }) => {
    return (
        <View
            style={[styles.mainContainer,
            styles[`mainContainer$_{type}`]]} >
            <View
                style={[styles.txtContainer,
                styles[`txtContainer$_{type}`]]
                } >

                <Text
                    style={[styles.modaltxt,
                    styles[`modaltxt$_{type}`]]}>
                    {text}
                </Text>
                <View style={styles.iconContainer} >
                    <Entypo
                        name={iconRequire}
                        style={[styles.icon, styles
                        [`icon_${type}`]]}
                        size={25}
                        onPress={iconPressed}
                    />
                </View>
            </View>
        </View >
    )
}
export default ModalComponent
const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    txtContainer: {
        width: 260,
        height: 30,
    },
    modaltxt: {
        textTransform: 'capitalize',
        fontSize: 20,
        marginLeft: 20,
        color: 'black',
        fontWeight: '300',
    },
    iconContainer: {
        width: 30,
        height: 30,
        bottom: 20,
        left: 330,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_Primary1: {},
})