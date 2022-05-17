/* eslint-disable prettier/prettier */
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import BottomMenu from '../Bottommenu/BottomMenu'
const images = [
  require('../../../../assets/images/image1.jpeg'),
  require('../../../../assets/images/image2.jpeg'),
  require('../../../../assets/images/image3.jpeg'),
  require('../../../../assets/images/image4.jpeg'),
  require('../../../../assets/images/image5.jpeg'),
  require('../../../../assets/images/image6.jpeg'),
  require('../../../../assets/images/image7.jpeg'),
  require('../../../../assets/images/image8.jpeg'),
  require('../../../../assets/images/image9.jpeg'),

]

const ScrollBar = () => {
  return (
      <ScrollView
        style={styles.scroll}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.bgcontainer} >
          {
            images.map((image, index) => (
              <TouchableOpacity
                key={index}
              >
                <Image
                  key={index}
                  source={image}
                  style={styles.image}
                />
              </TouchableOpacity>
            ))
          }

        </View>
      </ScrollView>
  )
}
export default ScrollBar;

const styles = StyleSheet.create({
  bgcontainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginLeft: 10,
    width: 70,
    height: 90,
  },
})