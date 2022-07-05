import { StyleSheet, Text, View, FlatList, useWindowDimensions,Image } from 'react-native'
import React, { useState, useCallback, } from 'react'
import Homedata from '../../../../Data/Homedata';
const ImageCarousel = ({data,type}) => {
    const WindowWidth = useWindowDimensions().width;
    const [ActiveIndex, setActiveIndex] = useState(0);
    const onFlatListUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
        }
    }, []);

    return (
        <View style={[styles.carouselcontainer,styles[`carouselcontainer_${type}`],]} >
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={[styles.imageCarousel, { width: WindowWidth }]}
                            source={item.image}
                        />
                    )
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={WindowWidth}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 58,
                }}
                onViewableItemsChanged={onFlatListUpdate}
            />
            <View style={styles.dots} >
                {data.map((dots, index) => (
                    <View
                        key={index}
                        style={[styles.dot,
                        {
                            backgroundColor: index === ActiveIndex ? '#7aa9f5' : '#ededed'
                        }
                        ]} />
                ))}
            </View>
        </View>

    )
}


export default ImageCarousel

const styles = StyleSheet.create({
    carouselcontainer: {
        height: 280,
        backgroundColor: 'white',
        marginTop: 5,
    },
    carouselcontainer_Primary:{
        height: 300,
        backgroundColor: 'white',
        borderBottomWidth:5,
        borderBottomColor:'#e3e1e1',

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