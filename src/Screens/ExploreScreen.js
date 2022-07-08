import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import UpperExplorePortion from '../Components/ExploreScreen Component/UpperExplorePortion'
import Homedata from '../Data/Homedata'
const ExploreScreen = () => {
  return (
    <View style={styles.rootContainer} >
      <FlatList
        data={Homedata.ExploreScreenData}
        scrollEnabled={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <UpperExplorePortion
              text={item.text}
              Icon={item.Icon}
              type={item.type}
              extText={item.extText}
              onPress={item.onPress}
            />
            )
          }}
          />
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor:'white',
  },
  BorderColor: {
    borderBottomWidth: 8,
    borderBottomColor: '#ededed',
  },
})