import { StyleSheet, View, Modal, ScrollView } from 'react-native'
import React from 'react'
import ModalComponent from '../ModalComponent'
const SecondModal = ({ condition }) => {
    return (
        <View>
            <Modal
                visible={condition}
                transparent={true}
                animationType={'fade'}
            >
                <ScrollView style={styles.modalstl} >
                    <ModalComponent
                        text='topwear'
                        iconRequire='chevron-small-down'

                    />
                    <ModalComponent
                        text='footwear'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='bottomwear'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='watches'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='other accessories'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='sports & activewear'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='innerwear'
                        iconRequire='chevron-small-down'

                    />
                    <ModalComponent
                        text='ethnicwear'
                        iconRequire='chevron-small-down'

                    />
                    <ModalComponent
                        text='loungewear & sleepwear'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='personal care'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='bags, backpacks & wallets'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='luggage & trolleys'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='shop by occasion'
                    />
                    <ModalComponent
                        text='teens'
                    />
                    <ModalComponent
                        text='winter store'
                    />
                    <ModalComponent
                        text='gift card'
                    />
                </ScrollView>
            </Modal>
        </View>
    )
}

export default SecondModal

const styles = StyleSheet.create({
    modalstl: {
        width: '100%',
        height: 600,
        marginTop: 130,
    },
})