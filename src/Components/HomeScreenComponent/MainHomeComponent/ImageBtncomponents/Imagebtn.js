import { StyleSheet, Text, View, Image, FlatList, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState, useCallback } from 'react'
import Homedata from '../../../../Data/Homedata'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import styles from './styles'
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
    const WindowWidth = useWindowDimensions().width;
    return (
        <View style={styles.MultipleImageContainer} >
            <View style={styles.MultipleImagetextContainer} >
                <Text style={styles.MultipleContainertext} > Top picks of the season  </Text>
            </View>
            <View style={styles.multipleImagesubContainer}>
                <FlatList
                    numColumns={2}
                    data={Homedata.MultipleImages}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Image
                            style={[styles.multipleImages, { width: WindowWidth - 200 }]}
                            source={item.image} />
                    )}
                />
            </View>
        </View>
    )
}

const Finescroll = () => {
    const WindowWidth = useWindowDimensions().width;
    return (
        <View style={styles.FinescrollMaincontainer} >
            <View>
                <Text style={styles.FinescrollText}> featured brands </Text>
            </View>
            <FlatList
                data={Homedata.Finescroll}
                scrollEnabled={true} 
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image
                        style={[styles.Finescrollimage, { width: WindowWidth - 120 }]}
                        source={item.image} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={'fast'}
                snapToAlignment={'start'}

            />
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
            <Finescroll />
        </View>

    )
}

export default Imagebtn;