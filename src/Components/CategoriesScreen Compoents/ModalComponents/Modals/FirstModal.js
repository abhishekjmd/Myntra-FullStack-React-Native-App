import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import ModalComponent from '../ModalComponent'
const FirstModal = ({ condition }) => {
    return (
        <View>
            <Modal
                visible={condition}
                transparent={true}
                animationType={'fade'}
            >
                <View style={styles.modalstl} >
                    <ModalComponent
                        text='explore screen'
                    // type='Primary1'
                    />
                    <ModalComponent
                        text='top brands'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='men'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='women'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='kids'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='footwear'
                    />
                    <ModalComponent
                        text='accessories'
                    />
                    <ModalComponent
                        text='jewellery'
                    />
                    <ModalComponent
                        text='beauty'
                    />
                </View>
            </Modal>
        </View>
    )
}

export default FirstModal

const styles = StyleSheet.create({
    modalstl: {
        width: '100%',
        height: 600,
        marginTop: 130,
    },
})