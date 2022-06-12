import { StyleSheet, Text, View, Modal, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';

const LoginComponent = () => {
    return (
        <View style={styles.rootContainer} >
            <Modal
                visible={true}
                transparent={true}
                animationType={'fade'}
            >
                <View style={styles.ModalContainer}>
                    <View style={styles.TopContainer} >

                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png' }}
                            style={styles.logo}
                        />
                        <Entypo
                            name='cross'
                            size={30}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default LoginComponent

const styles = StyleSheet.create({
    logo: {
        width: 35,
        height: 23,
        //   tintColor: '#e00bcf',
    },
    ModalContainer:{
        width:'100%',
        flex:1,
        backgroundColor:'white',
        height:600,
    }
})