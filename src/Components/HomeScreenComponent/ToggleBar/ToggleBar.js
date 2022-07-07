/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Modal, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState, } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Toolbar from '../ToolBar/Toolbar';
import { useNavigation } from '@react-navigation/native';

const ToggleBar = ({ NotificationPressed, FavouriteScreenPressed }) => {
    const navigation = useNavigation();
    const [modalOpen, setModalOpen] = useState(false);
    const iconPressed = () => {
        setModalOpen(true)
    }
    const OrdersPressed = () => {
        console.warn('pressed')
    }
    return (
        <View>
            <Toolbar
                pressed={iconPressed}
                NotificationPressed={NotificationPressed}
                FavouriteScreenPressed={FavouriteScreenPressed}
            />
            <Modal
                visible={modalOpen}
                transparent={true}
                animationType={'fade'}
                onRequestClose={() => setModalOpen(false)}
            >
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPressOut={() => setModalOpen(false)}>
                    <TouchableWithoutFeedback
                        style={{ backgroundColor: '#00000aaa' }} >
                        <View style={styles.modalContainer}>
                            <View>
                                <View style={styles.imageContainer} >
                                    <Image
                                        style={styles.image}
                                        source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e27d991c-f967-4884-b0c4-1ef41a5dc5d7/d6guduy-a9f4a7af-3dc3-4ac4-955a-96117f27e200.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UyN2Q5OTFjLWY5NjctNDg4NC1iMGM0LTFlZjQxYTVkYzVkN1wvZDZndWR1eS1hOWY0YTdhZi0zZGMzLTRhYzQtOTU1YS05NjExN2YyN2UyMDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kCdbyS33z1y4DkvUm5cvWfF334IYxYQM-zNNseSes_c' }} />
                                    <View style={styles.iconCotainer} >
                                        <SimpleLineIcons
                                            name='user'
                                            size={35}
                                            style={{ color: 'black' }}
                                        />
                                    </View>
                                    <SimpleLineIcons
                                        name='arrow-right'
                                        size={20}
                                        onPress={() => setModalOpen(false)}
                                        style={styles.closemodal}
                                    />
                                    <View style={styles.btnContainer} >
                                        <Text style={styles.logbtn}>Log In . </Text>
                                        <Text style={styles.logbtn}>Sign Up </Text>
                                    </View>
                                </View>
                            </View>

                            <Pressable style={styles.pressableContainer}>
                                <AntDesign
                                    size={30}
                                    name="appstore-o"
                                    style={styles.cateIcon}
                                />
                                <Text style={styles.catetext}
                                >Shop by Categories</Text>
                            </Pressable>
                            <Pressable
                                onPress={OrdersPressed}
                                style={styles.pressableContainer2}>
                                <SimpleLineIcons
                                    size={30}
                                    name="social-dropbox"
                                    style={styles.cateIcon}
                                // onpress={ordersPressed}

                                />
                                <Text style={styles.catetext}
                                >Orders</Text>
                            </Pressable>
                            <Pressable style={styles.
                                lstContainer}>
                                <Text style={styles.lst}>faqs</Text>
                                <Text style={styles.lst}>contact us</
                                Text>
                                <Text style={styles.lst}>legal</
                                Text>
                            </Pressable>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default ToggleBar

const styles = StyleSheet.create({
    modalContainer: {
        width: '70%',
        height: '100%',
        backgroundColor: 'white',
    },
    imageContainer: {
        justifyContent: 'center',
        // alignItems:'center',
    },
    image: {
        width: '100%',
        height: 150,
    },
    iconCotainer: {
        position: 'absolute',
        left: 20,
        top: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    closemodal: {
        color: 'white',
        bottom: 40,
        left: 210,
    },
    btnContainer: {
        width: 150,
        bottom: 60,
        flexDirection: 'row',
        left: 20,
    },
    logbtn: {
        color: 'white',
        fontSize: 20,
    },
    pressableContainer: {
        flexDirection: 'row',
        height: 45,
        width: '100%',
        borderBottomColor: '#cfcccc',
        borderBottomWidth: 1,
    },
    cateIcon: {
        color: 'black',
        marginLeft: 10,
    },
    catetext: {
        color: 'black',
        marginLeft: 10,
        fontSize: 20,
    },
    pressableContainer2: {
        flexDirection: 'row',
        height: 80,
        width: '100%',
        borderBottomColor: '#cfcccc',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    lstContainer: {
        marginTop: 25,
        width: '70%',
        height: 180,
        justifyContent: 'flex-start',

    },
    lst: {
        marginLeft: 50,
        marginBottom: 20,
        color: 'black',
        fontSize: 20,
        textTransform: 'uppercase',
    },
})