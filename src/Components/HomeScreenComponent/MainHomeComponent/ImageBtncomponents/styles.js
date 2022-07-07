import { StyleSheet } from 'react-native'
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
    MultipleImageContainer: {
        marginTop: 10,
        backgroundColor: 'white',
        height: 530,
        borderBottomWidth: 5,
        borderBottomColor: '#e3e1e1',
        borderTopWidth: 5,
        borderTopColor: '#e3e1e1',
    },
    MultipleImagetextContainer: {
        justifyContent: 'center',
    },
    MultipleContainertext: {
        color: 'black',
        textTransform: 'uppercase',
        fontSize: 16,
        padding: 10,
        fontWeight: '600',
    },
    multipleImagesubContainer: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        // backgroundColor: 'white',

    },
    multipleImages: {
        // width: 195,
        height: 220,
        marginBottom: 15,
        // padding:5,
    },
    FinescrollMaincontainer: {
        backgroundColor: 'white'
    },
    Finescrollzsubcontainer: {},
    FinescrollText: {
        color: 'black',
        textTransform: 'uppercase',
        fontSize: 16,
        padding: 10,
        fontWeight: '600',

    },
    Finescrollimage:{
        borderColor:'#e3e1e1',
        borderWidth:2,
        marginLeft:5,
        height:360,
    },
})
export default styles;