import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import TopCategories from '../Components/CategoriesScreen Compoents/TopCategories'
import ModalRenderComponent from '../Components/CategoriesScreen Compoents/ModalRenderComponent'

const CategoriesScreen = () => {
  const summerShopPressed = () => {
    console.warn('summer shop Pressed')
  }
  const womenPressed = () => {
    console.warn('women Pressed')
  }
  const menPressed = () => {
    console.warn('men Pressed')
  }
  const kidPressed = () => {
    console.warn('kid Pressed')
  }
  const beautyPressed = () => {
    console.warn('beauty Pressed')
  }
  const homePressed = () => {
    console.warn('home Pressed')
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
  }
  return (
    <ScrollView>
      <ModalRenderComponent />
      <TopCategories
        text='summer shop'
        subtext='turn up the heat in style'
        image={require('../../assets/images/Categories1.png')}
        Press={summerShopPressed}
        iconRequire='chevron-small-down'

      />
      <TopCategories
        text='women'
        subtext='kurtas & suits, tops & tees'
        image={require('../../assets/images/Categories2.png')}
        type='Primary1'
        Press={womenPressed}
        iconRequire='chevron-small-down'

      />
      <TopCategories
        text='men'
        subtext='t-shirts,shirts,jeans,shoe..'
        image={require('../../assets/images/Categories3.png')}
        type='Primary2'
        Press={menPressed}
        iconRequire='chevron-small-down'

      />
      <TopCategories
        text='kids'
        subtext='brands,clothing,footwear,...'
        image={require('../../assets/images/Categories4.png')}
        type='Primary3'
        Press={kidPressed}
        iconRequire='chevron-small-down'

      />
      <TopCategories
        text={"beauty & \n grooming"}
        subtext='skincare,makeup,groomin...'
        image={require('../../assets/images/Categories5.png')}
        type='Primary4'
        Press={beautyPressed}
        iconRequire='chevron-small-down'

      />
      <TopCategories
        text='home & living'
        subtext='bedsheets,blankets,towels...'
        image={require('../../assets/images/Categories6.png')}
        type='Primary5'
        Press={homePressed}
        iconRequire='chevron-small-down'

      />
      <TopCategories
        text='accessories'
        subtext='one shop stop to amp up'
        image={require('../../assets/images/Categories71.png')}
        type='Primary6'
        Press={accessoriesPressed}
        iconRequire='chevron-small-down'

      />
      <TopCategories
        text='teens'
        subtext='next level refresh'
        image={require('../../assets/images/Categories7.png')}
        type='Primary7'
        Press={teensPressed}

      />
      <TopCategories
        text='plus size'
        subtext='tops,tshirts,kurtas'
        image={require('../../assets/images/Categories8.png')}
        type='Primary8'
        Press={plusSizePressed}
        iconRequire='chevron-small-down'

      />
      <TopCategories
        text='theme stores'
        subtext='wedding,party,sports,han...'
        image={require('../../assets/images/Categories9.png')}
        type='Primary9'
        Press={themeStorePressed}
        iconRequire='chevron-small-down'

      />
      <TopCategories
        text='styleCast'
        subtext='new,bold,trending'
        image={require('../../assets/images/Categories10.png')}
        type='Primary10'
        Press={stylecastPressed}
      />
      <TopCategories
        text='myntra mall'
        subtext='h&m,nike,smashbox,max'
        image={require('../../assets/images/Categories10.png')}
        type='Primary11'
        Press={mallPressed}
        iconRequire='chevron-small-down'

      />
      <TopCategories
        text='myntra luxe'
        subtext='ted baker,fred perry,tissot...'
        image={require('../../assets/images/Categories12.png')}
        type='Primary12'
        Press={luxePressed}
        iconRequire='chevron-small-down'

      />
      <TopCategories
        text='pet essential'
        subtext='clothing,accesories & more'
        image={require('../../assets/images/Categories13.png')}
        type='Primary13'
        Press={petPressed}
        iconRequire='chevron-small-down'

      />
    </ScrollView>
  )
}
export default CategoriesScreen

const styles = StyleSheet.create({
})