import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
const ModalView = ({ text, iconRequire, type }) => {
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
                        size={20}
                    />
                </View>
            </View>
        </View >
    )
}

const ModalComponent = () => {
    return (
        <View>
            <Modal>
                <ModalView
                    text='explore screen'
                    // type='Primary1'
                    iconRequire='chevron-small-down'
                />
                <ModalView
                    text='explore screen'
                />
                <ModalView
                    text='explore screen'
                />
                <ModalView
                    text='explore screen'
                />
                <ModalView
                    text='explore screen'
                />
                <ModalView
                    text='explore screen'
                />
                <ModalView
                    text='explore screen'
                />
                <ModalView
                    text='explore screen'
                />
                <ModalView
                    text='explore screen'
                />
            </Modal>
        </View>
    )
}

export default ModalComponent

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 60,
        backgroundColor: '#ebebeb',
        justifyContent: 'center',
        // flexDirection:'r',
    },
    txtContainer:{
        width:180,
        height:30,
        backgroundColor:'#f5edf7',
        flexDirection:'column',
    },
    modaltxt: {
        textTransform: 'capitalize',
        fontSize: 20,
        marginLeft: 20,
        color: 'black',
        fontWeight: '300',
    },
    iconContainer:{
        width:30,
        height:30,
        backgroundColor:'#f2f5f3'
    },
    icon_Primary1: {
        // bottom: 10,
        // left: -80,
    },
})