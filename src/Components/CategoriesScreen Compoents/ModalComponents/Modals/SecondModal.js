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
                        text='westernwear'

                    />
                    <ModalComponent
                        text='ethnic & Fusionwear'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='Footwear'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='lingerie'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='bags,wallets & clutches'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='jewellery & hair accessories'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='other accessories'
                        iconRequire='chevron-small-down'

                    />
                    <ModalComponent
                        text='beauty & personal care'
                        iconRequire='chevron-small-down'

                    />
                    <ModalComponent
                        text='sports & activewear'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='luggage & trolleys'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='sleepwear & loungewear'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='watches'
                        iconRequire='chevron-small-down'
                    />
                    <ModalComponent
                        text='shop by occasion'
                    />
                    <ModalComponent
                        text='teens'
                    />
                    <ModalComponent
                        text='maternity'
                    />
                    <ModalComponent
                        text='myntra stylecast'
                    />
                    <ModalComponent
                        text='winterwear store'
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