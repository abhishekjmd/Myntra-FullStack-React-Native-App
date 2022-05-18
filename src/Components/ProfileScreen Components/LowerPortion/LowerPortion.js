import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from
    'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from
    'react-native-vector-icons/EvilIcons'
const LowerPortion = ({ text, Icon, container, type }) => {
    return (
        <View style={[styles.rootContainer, styles[`rootContainer_${type}`]]}>
            <View style={styles.iconContainer} >
                <MaterialCommunityIcons name={Icon}
                    size={25} />
            </View>
            <View style={[styles.txtContainer, styles[`txtContainer_${type}`]]} >
                <Text style={[styles.txt1, styles[`txt1_${type}`]]} > {text} </
                Text>
            </View>
            <View style={[styles.lstlogo, styles
            [`container_${type}`]]} >
                <EvilIcons name='chevron-right' size={30}
                />
            </View>
        </View>
    )
}

export default LowerPortion

const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
    },
    rootContainer_PrimaryQ: {
        width: '100%',
        height: 55,
        alignItems: 'center',
        marginLeft: 30,
    },
    iconContainer: {
        marginLeft: 15,
    },
    txtContainer: {
        marginLeft: 10,
    },
    txt1_PrimaryQ: {
        textTransform: 'uppercase',
        color: '#595957',
    },
    txt1: {
        fontSize: 20,
        color: '#413F42',
        textTransform: 'capitalize',
        fontWeight: '500',
    },
    container_Primary: {
        left: 142,
    },
    container_Secondary: {
        left: 185,
    },
})