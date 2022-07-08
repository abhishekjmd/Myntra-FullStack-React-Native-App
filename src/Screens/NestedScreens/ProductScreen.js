import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

rnfe
const ProductScreen = () => {
  return (
    <View>
      <View> 
        <Image 
        style={styles.image}
        source={require('../../../assets/images/firstProductScreen5.jpeg')} />
      </View>
      
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  image:{
    width:180,
    height:220,
    resizeMode:'contain',
  },
})