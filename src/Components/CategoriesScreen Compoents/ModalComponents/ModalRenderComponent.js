import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TopRenderComponents from '../TopCategoriesComponents/TopRenderComponents'
import FirstModal from './Modals/FirstModal'
import SecondModal from './Modals/SecondModal'
import ThirdModal from './Modals/ThirdModal'
const ModalRenderComponent = () => {
    const [modalOpen, setModalOpen] = useState
        (false);
    // const summerShopPressed = () => {
    // setModalOpen(false)
    // }
    const modalClose = () => {
        setModalOpen(true)
        console.warn('modalClose Pressed')
    }
    return (
        <View>
            {/*  <SecondModal
                condition={modalOpen}
             /> 
            */}
            <ThirdModal
                condition={modalOpen}

            />
            <TopRenderComponents
                summerShopPressed={modalClose}
                womenPressed={modalClose}
                menPressed={modalClose}
                kidPressed={modalClose}
                beautyPressed={modalClose}
                homePressed={modalClose} accessoriesPressed={modalClose}
                teensPressed={modalClose}
                plusSizePressed={modalClose} themeStorePressed={modalClose} stylecastPressed={modalClose}
                mallPressed={modalClose}
                luxePressed={modalClose}
                petPressed={modalClose}
            />
        </View>
    )
}

export default ModalRenderComponent

const styles = StyleSheet.create({})