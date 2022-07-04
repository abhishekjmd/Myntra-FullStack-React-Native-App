import { StyleSheet, Text, View, Image, FlatList, useWindowDimensions } from 'react-native'
import React, { useState, useCallback, } from 'react'
import Homedata from '../../../Data/Homedata'
import ImageCarousel from './ImageCarousel/ImageCarousel'
const images = [
    require('../../../../assets/images/bottombtn1.jpeg'),
    require('../../../../assets/images/bottombtn2.jpeg')

]

const Imagebtn = () => {
    const WindowWidth = useWindowDimensions().width;
    return (
        <View>
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
            <ImageCarousel />
        </View>
    )
}

export default Imagebtn;
export { ImageCarousel };

const styles = StyleSheet.create({
    carouselcontainer: {
        height: 280,
        backgroundColor: 'white',
        marginTop: 5,
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
        height: 270,
        resizeMode: 'cover',
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        backgroundColor: '#ededed',
        margin: 5,
    },

})