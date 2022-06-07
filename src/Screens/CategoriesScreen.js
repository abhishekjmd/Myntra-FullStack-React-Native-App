import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TopRenderComponents from '../Components/CategoriesScreen Compoents/TopCategoriesComponents/TopRenderComponents'
import ModalComponent from '../Components/CategoriesScreen Compoents/ModalComponents/ModalComponent'
import ModalRenderComponent from '../Components/CategoriesScreen Compoents/ModalComponents/ModalRenderComponent'
import FirstModal from '../Components/CategoriesScreen Compoents/ModalComponents/Modals/FirstModal'
const CategoriesScreen = () => {
  const [firstModalOpen, setfirstModalOpen] =
    useState(false);
  return (
    <ScrollView>
    <ModalRenderComponent />
      {/* // <FirstModal >
        // condition={firstModalOpen}
        // // closeCondition={() => setfirstModalOpen(false)}
      // />
      // <TopRenderComponents
        // summerShopPressed={() =>
          // setfirstModalOpen(true)}
      // />*/}

    </ScrollView>
  )
}
export default CategoriesScreen

const styles = StyleSheet.create({
})