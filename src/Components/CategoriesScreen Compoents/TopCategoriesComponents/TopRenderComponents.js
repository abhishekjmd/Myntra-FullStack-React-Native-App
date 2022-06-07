import { View, Text } from 'react-native'
import React from 'react'
import TopCategories from './TopCategories'

const TopRenderComponents = ({ womenPressed, subWomenPressed, menPressed, subMenPressed, kidPressed, subKidPressed, beautyPressed, subBeautyPressed, homePressed, subHomePressed, accessoriesPressed, subAccessoriesPressed, teensPressed, subTeensPressed, plusSizePressed, subPlusSizePressed, themeStorePressed, subThemeStorePressed, stylecastPressed, subStylecastPressed, mallPressed, subMallPressed, luxePressed, subLuxePressed, petPressed, subPetPressed, summerShopPressed, subSummerShopPressed }) => {
    {/* const womenPressed = () => {
        console.warn('women Pressed')
        //  setModalOpen(true)
    }
    const menPressed = () => {
        console.warn('men Pressed')
        //  setModalOpen(true)
    }
    const kidPressed = () => {
        console.warn('kid Pressed')
        //  setModalOpen(true)
    }
    const beautyPressed = () => {
        console.warn('beauty Pressed')
        //  setModalOpen(true)
    }
    const homePressed = () => {
        console.warn('home Pressed')
        // setModalOpen(true)
    }
    const accessoriesPressed = () => {
        console.warn('accessories Pressed')
    }
    const teensPressed = () => {
        console.warn('teens Pressed')
    }
    const plusSizePressed = () => {
        console.warn('plus size Pressed')
    }
    const themeStorePressed = () => {
        console.warn('theme store Pressed')
    }
    const stylecastPressed = () => {
        console.warn('stylecast Pressed')
    }
    const mallPressed = () => {
        console.warn('mall Pressed')
    }
    const luxePressed = () => {
        console.warn('luxe Pressed')
    }
    const petPressed = () => {
        console.warn('pet Pressed')
    } */}
    return (
        <View>
            <TopCategories
                text='summer shop'
                subtext='turn up the heat in style'
                image={require('../../../../assets/images/Categories1.png')}
                Press={summerShopPressed}
                 subPress={subSummerShopPressed}
                iconRequire='chevron-small-down'
            />
            <TopCategories
                text='women'
                subtext='kurtas & suits, tops & tees'
                image={require('../../../../assets/images/Categories2.png')}
                type='Primary1'
                Press={womenPressed}
                subPress={subWomenPressed}
                iconRequire='chevron-small-down'
            />
            <TopCategories
                text='men'
                subtext='t-shirts,shirts,jeans,shoe..'
                image={require('../../../../assets/images/Categories3.png')}
                type='Primary2'
                Press={menPressed}
                subPress={subMenPressed}
                iconRequire='chevron-small-down'
            />
            <TopCategories
                text='kids'
                subtext='brands,clothing,footwear,...'
                image={require('../../../../assets/images/Categories4.png')}
                type='Primary3'
                Press={kidPressed}
                subPress={subKidPressed}
                iconRequire='chevron-small-down'
            />
            <TopCategories
                text={"beauty & \n grooming"}
                subtext='skincare,makeup,groomin...'
                image={require('../../../../assets/images/Categories5.png')}
                type='Primary4'
                Press={beautyPressed}
                subPress={subBeautyPressed}
                iconRequire='chevron-small-down'
            />
            <TopCategories
                text='home & living'
                subtext='bedsheets,blankets,towels...'
                image={require('../../../../assets/images/Categories6.png')}
                type='Primary5'
                Press={homePressed}
                subPress={subHomePressed}
                iconRequire='chevron-small-down'
            />
            <TopCategories
                text='accessories'
                subtext='one shop stop to amp up'
                image={require('../../../../assets/images/Categories71.png')}
                type='Primary6'
                Press={accessoriesPressed}
                subPress={subAccessoriesPressed}

                iconRequire='chevron-small-down'
            />
            <TopCategories
                text='teens'
                subtext='next level refresh'
                image={require('../../../../assets/images/Categories7.png')}
                type='Primary7'
                Press={teensPressed}
                subPress={subTeensPressed}
            />
            <TopCategories
                text='plus size'
                subtext='tops,tshirts,kurtas'
                image={require('../../../../assets/images/Categories8.png')}
                type='Primary8'
                Press={plusSizePressed}
                subPress={subPlusSizePressed}
                iconRequire='chevron-small-down'
            />
            <TopCategories
                text='theme stores'
                subtext='wedding,party,sports,han...'
                image={require('../../../../assets/images/Categories9.png')}
                type='Primary9'
                Press={themeStorePressed}
                subPress={subThemeStorePressed}
                iconRequire='chevron-small-down'
            />
            <TopCategories
                text='styleCast'
                subtext='new,bold,trending'
                image={require('../../../../assets/images/Categories10.png')}
                type='Primary10'
                Press={stylecastPressed}
                subPress={subStylecastPressed}
            />
            <TopCategories
                text='myntra mall'
                subtext='h&m,nike,smashbox,max'
                image={require('../../../../assets/images/Categories10.png')}
                type='Primary11'
                Press={mallPressed}
                subPress={subMallPressed}
                iconRequire='chevron-small-down'
            />
            <TopCategories
                text='myntra luxe'
                subtext='ted baker,fred perry,tissot...'
                image={require('../../../../assets/images/Categories12.png')}
                type='Primary12'
                Press={luxePressed}
                subPress={subLuxePressed}
                iconRequire='chevron-small-down'
            />
            <TopCategories
                text='pet essential'
                subtext='clothing,accesories & more'
                image={require('../../../../assets/images/Categories13.png')}
                type='Primary13'
                Press={petPressed}
                subPress={subPetPressed}
                iconRequire='chevron-small-down'
            />
        </View>
    )
}

export default TopRenderComponents