import { StyleSheet, Text, View, Image, FlatList, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState, useCallback, } from 'react'
import Homedata from '../../../../Data/Homedata'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import ScrollBar from '../../ScrollBar/ScrollBar'
import ToggleBar from '../../ToggleBar/ToggleBar'

const SingleImage = () => {
    return (
        <View style={styles.singleImageContainer}>
            {
                Homedata.singleImage.map((term, index) => (
                    <Image
                        key={index}
                        style={styles.singleImage}
                        source={term.image} />

                ))
            }
        </View>
    )
}
const MultipleImage = () => {
    return (
        <View>
            <Text> Top picks of the season  </Text>
            <View style={styles.multipleImagesubContainer}>



            
                {/*
                    Homedata.MultipleImages.map((item, index) => (

                        <Image
                            style={styles.multipleImages}
                            source={item.image}
                            key={index}
                        />

                    ))

                    */}
                {/*<Image
                    style={styles.multipleImages}
                    source={require('../../../../../assets/images/firstcollage1.jpeg')} />
                <Image
                    style={styles.multipleImages}
                    source={require('../../../../../assets/images/firstcollage2.jpeg')} />
                <Image source={require('../../../../../assets/images/firstcollage3.jpeg')} />
            <Image source={require('../../../../../assets/images/firstcollage4.jpeg')} />
                */}
            </View>
        </View>
    )
}

const Imagebtn = () => {
    const WindowWidth = useWindowDimensions().width;
    return (

        // stylecast and beauty button

        <View>
            <View style={styles.root} >
                {
                    Homedata.Images.map((term, index) => (
                        <Image
                            style={styles.images}
                            source={term.image}
                            key={index}
                        />
                    ))
                }
            </View>
            {/*  ImageCarousel */}
            <ImageCarousel
                data={Homedata.Carouselimage} />
            <SingleImage />
            {/*  ImageCarousel2 */}
            <ImageCarousel
                data={Homedata.Carouselimage2}
                type='Primary'
            />
            <MultipleImage />
        </View>

    )
}

export default Imagebtn;


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
    singleImage: {
        height: 280,
        width: 196,
    },
    singleImageContainer: {
        flexDirection: 'row',
    },
    multipleImagesubContainer: {
        // flexDirection: 'row',

    },
    multipleImages: {
        width: 195,
        height: 220,
    },

})