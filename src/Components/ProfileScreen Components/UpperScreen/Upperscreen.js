import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const Upperscreen = () => {
    return (
        <View style={styles.mainContainer} >
            <View style={styles.colorContainer} />
            <View style={styles.centerContainer} >
                <View style={styles.iconContainer} >
                    <SimpleLineIcons
                        name='user'
                        size={60}
                    />
                </View>
                <View style={styles.btn} >
                    <Text style={styles.txtbtn}>log in/sing up</Text>
                </View>
            </View>
        </View>
    )
}

export default Upperscreen

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 190,
        borderBottomWidth:20,
        borderBottomColor:'#ededed',
    },
    colorContainer: {
        width: '100%',
        height: 70,
        backgroundColor: '#353436',
    },
    centerContainer: {
        flexDirection: 'row',
    },
    iconContainer: {
        width: 120,
        height: 120,
        backgroundColor: 'white',
        flexDirection: 'row',
        bottom: 45,
        left: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth:2,
        borderColor:'#ededed',
    },
    btn: {
        width: 230,
        height: 50,
        backgroundColor: '#b01cc7',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        top: 23,
        left: 30,
    },
    txtbtn: {
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase',
    }
})