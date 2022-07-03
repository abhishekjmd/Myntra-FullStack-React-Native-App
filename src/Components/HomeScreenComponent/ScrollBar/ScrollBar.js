/* eslint-disable prettier/prettier */
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import BottomMenu from '../Bottommenu/BottomMenu'
const images = [
  require('../../../../assets/images/scroll1.jpeg'),
  require('../../../../assets/images/scroll2.jpeg'),
  require('../../../../assets/images/scroll3.jpeg'),
  require('../../../../assets/images/scroll4.jpeg'),
  require('../../../../assets/images/scroll5.jpeg'),
  require('../../../../assets/images/scroll6.jpeg'),
  require('../../../../assets/images/scroll7.jpeg'),
  require('../../../../assets/images/scroll8.jpeg'),
  require('../../../../assets/images/scroll9.jpeg'),
  require('../../../../assets/images/scroll10.jpeg'),
]

const Scrollbottombtn = ()=>{
  return(
  <View>
    <Image 
    style={styles.scrollbottomimage}
    source={require('../../../../assets/images/scroll10.jpeg')} />
  </View>
  )

}

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
  scroll:{
    backgroundColor:'white',
    // borderTopWidth:'5',
  },
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
  scrollbottomimage:{
    marginLeft: 10,
    width: 70,
    height: 90,

  }
})