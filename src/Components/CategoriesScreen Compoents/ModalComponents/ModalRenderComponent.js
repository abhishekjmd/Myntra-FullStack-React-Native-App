import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import TopRenderComponents from '../TopCategoriesComponents/TopRenderComponents'
import FirstModal from './Modals/FirstModal'
import SecondModal from './Modals/SecondModal'
import ThirdModal from './Modals/ThirdModal'
import ForthModal from './Modals/ForthModal'
import FifthModal from './Modals/FifthModal'
import SixthModal from './Modals/SixthModal'
import SeventhModal from './Modals/SeventhModal'
import EightModal from './Modals/EightModal'
import NinethModal from './Modals/NinethModal'
import TenthModal from './Modals/TenthModal'
import EleventhModal from './Modals/EleventhModal'
import TwelthModal from './Modals/TwelthModal'
import TirtheenthModal from './Modals/TirtheenthModal'
import FourtheenthModal from './Modals/FourtheenthModal'

const ModalRenderComponent = () => {

    const [firstModalOpen, setfirstModalOpen] = useState(false);
    const [secondModalOpen, setSecondModalOpen] =
        useState(false);
    const [thirdModalOpen, setThirdModalOpen] =
        useState(false);
    const [fourthModalOpen, setFourthModalOpen] =
        useState(false);
    const [fifthModalOpen, setFifthModalOpen] =
        useState(false);
    const [SixthModalOpen, setSixthModalOpen] =
        useState(false);
    const [SeventhModalOpen, setSeventhModalOpen] =
        useState(false);
    const [EigthModalOpen, setEigthModalOpen] =
        useState(false);
    const [NinethModalOpen, setNinethModalOpen] =
        useState(false);
    const [TenthModalOpen, setTenthModalOpen] =
        useState(false);
    const [EleventhModalOpen, setEleventhModalOpen] =
        useState(false);
    const [TwelvethModalOpen, setTwelvethModalOpen] =
        useState(false);
    const [ThirtheenthModalOpen, setThirteenModalOpen] =
        useState(false);
    const [FourteenthModalOpen,
        setFourteenthModalOpen] =
        useState(false);
    return (
        <ScrollView>
            <FirstModal
                condition={firstModalOpen}
                closeCondition={() => setfirstModalOpen(false)}
            />
            <SecondModal
                condition={secondModalOpen}
                closeCondition={() =>
                    setSecondModalOpen(false)}
            />
            <ThirdModal
                condition={thirdModalOpen}
                closeCondition={() =>
                    setThirdModalOpen(false)}
            />
            <ForthModal
                condition={fourthModalOpen}
                closeCondition={() =>
                    setFourthModalOpen(false)}
            />
            <FifthModal
                condition={fifthModalOpen}
                closeCondition={() =>
                    setFifthModalOpen(false)}
            />
            <SixthModal
                condition={SixthModalOpen}
                closeCondition={() =>
                    setSixthModalOpen(false)}
            />
            <SeventhModal
                condition={SeventhModalOpen}
                closeCondition={() =>
                    setSeventhModalOpen(false)}
            />

            <EightModal
                condition={EigthModalOpen}
                closeCondition={() =>
                    setEigthModalOpen(false)}
            />
            <NinethModal
                condition={NinethModalOpen}
                closeCondition={() =>
                    setNinethModalOpen(false)}
            />
            <TenthModal
                condition={TenthModalOpen}
                closeCondition={() =>
                    setTenthModalOpen(false)}
            />
            <EleventhModal
                condition={EleventhModalOpen}
                closeCondition={() =>
                    setEleventhModalOpen(false)}
            />
            <TwelthModal
                condition={TwelvethModalOpen}
                closeCondition={() =>
                    setTwelvethModalOpen(false)}
            />
            <TirtheenthModal
                condition={ThirtheenthModalOpen}
                closeCondition={() =>
                    setThirteenModalOpen(false)}
            />
            <FourtheenthModal
                condition={FourteenthModalOpen}
                closeCondition={() =>
                    setFourteenthModalOpen(false)}
            />
            <TopRenderComponents
                summerShopPressed={() => setfirstModalOpen(true)}
                womenPressed={() => setSecondModalOpen(true)}
                menPressed={() => setThirdModalOpen(true)}
                kidPressed={() => setFourthModalOpen(true)}
                beautyPressed={() => setFifthModalOpen(true)}
                homePressed={() => setSixthModalOpen(true)}
                accessoriesPressed={() => setSeventhModalOpen(true)}
                teensPressed={() => setEigthModalOpen(true)}
                plusSizePressed={() => setNinethModalOpen(true)}
                themeStorePressed={() => setTenthModalOpen(true)}
                stylecastPressed={() => setEleventhModalOpen(true)}
                mallPressed={() => setTwelvethModalOpen(true)}
                luxePressed={() => setThirteenModalOpen(true)}
                petPressed={() => setFourteenthModalOpen(true)}
            />
        </ScrollView>
    )
}
export default ModalRenderComponent
const styles = StyleSheet.create({})