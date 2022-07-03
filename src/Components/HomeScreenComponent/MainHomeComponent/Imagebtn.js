import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Homedata from '../../../Data/Homedata'

const images = [
    require('../../../../assets/images/bottombtn1.jpeg'),
    require('../../../../assets/images/bottombtn2.jpeg')

]
const Carouselimage = [
    '../../../../assets/images/firstCarousel2.jpeg',
    '../../../../assets/images/firstCarousel2.jpeg',
    '../../../../assets/images/firstCarousel2.jpeg',
    '../../../../assets/images/firstCarousel2.jpeg',
    '../../../../assets/images/firstCarousel2.jpeg',
    '../../../../assets/images/firstCarousel2.jpeg',
    '../../../../assets/images/firstCarousel2.jpeg',
    '../../../../assets/images/firstCarousel2.jpeg',
    '../../../../assets/images/firstCarousel2.jpeg',

]
const Imagebtn = () => {
    return (
        <View style={styles.maincontainer} >
            <View style={styles.root} >
                {
                    images.map((image, index) => (
                        <Image
                            style={styles.images}
                            source={image}
                            key={index}
                        />
                    ))
                }
            </View>
            <View>
                <FlatList
                    data={Homedata}
                    renderItem={({ item }) => (
                        <Image style={styles.imageCarousel} source={{uri:item}}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Imagebtn

const styles = StyleSheet.create({
    maincontainer:{
        height:500,
    },
    root: {
        marginTop: 5,
        flexDirection: 'row',
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    images: {
        marginTop: 5,
        width: 195,
        height: 50
    },
    imageCarousel: {
        margin: 10,
        height: 250,
        resizeMode: 'contain',       
    },
})