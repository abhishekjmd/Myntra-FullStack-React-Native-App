import { StyleSheet, View, Modal, ScrollView } from 'react-native'
import React from 'react'
import ModalComponent from '../ModalComponent'
const SecondModal = ({ condition, closeCondition }) => {
    return (
        <ScrollView
        pagingEnabled
        >
            <Modal
                visible={condition}
                transparent={true}
                animationType={'fade'}
            >
                <ScrollView style={styles.modalstl} >
                    <ModalComponent
                        text='explore kids store'
                        iconRequire='cross'
                        iconPressed={closeCondition}

                    />
                    <ModalComponent
                        text='explore teens store'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='girls clothing'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='boys clothing'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='infants'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='explore kids footwear store'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='girls footwear'
                        iconRequire='chevron-small-down'

                    />
                    <ModalComponent
                        text='boys footwear'
                        iconRequire='chevron-small-down'

                    />
                    <ModalComponent
                        text='kids spring summer store'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='explore kids character store'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='explore kids festive store'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='explore kids toys store'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='explore kids winterwear store '
                    />
                    <ModalComponent
                        text='masks'
                    />
                    <ModalComponent
                        text='jewellery & hair accessories'
                    />
                    <ModalComponent
                        text='bags & accessories'
                    />
                    <ModalComponent
                        text='furnishing & decor'
                    />
                </ScrollView>
            </Modal>
        </ScrollView>
    )
}

export default SecondModal

const styles = StyleSheet.create({
    modalstl: {
        width: '100%',
        height:200,
        marginTop: 130,
        backgroundColor:'yellow',
    },
})