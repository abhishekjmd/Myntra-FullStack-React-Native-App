import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TopRenderComponents from '../Components/CategoriesScreen Compoents/TopCategoriesComponents/TopRenderComponents';
import TopCategories from '../Components/CategoriesScreen Compoents/TopCategoriesComponents/TopCategories'
const CategoriesScreen = () => {
  return (
    <ScrollView>
      <TopRenderComponents />
    </ScrollView>
  )
}
export default CategoriesScreen

const styles = StyleSheet.create({
})