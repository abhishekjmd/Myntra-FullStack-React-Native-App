import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TopRenderComponents from '../Components/CategoriesScreen Compoents/TopCategoriesComponents/TopRenderComponents'
import ModalComponent from '../Components/CategoriesScreen Compoents/ModalComponents/ModalComponent'
import ModalRenderComponent from '../Components/CategoriesScreen Compoents/ModalComponents/ModalRenderComponent'

const CategoriesScreen = () => {

  return (
    <ScrollView>
       <ModalRenderComponent /> 
     
    </ScrollView>
  )
}
export default CategoriesScreen

const styles = StyleSheet.create({
})