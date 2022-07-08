import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import MaterialCommunityIcons from
  'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from
  'react-native-vector-icons/EvilIcons'
import FontAwesome5 from
  'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';

const UpperExplorePortion = ({ text, Icon, container, type, extText,onPress }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable 
      style={[styles.rootContainer,styles[`rootContainer_${type}`]]}
      onPress={()=>{navigation.navigate(onPress)}}
      >
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name=
            {Icon}
            size={25} />
        </View>
        <View style={[styles.txtContainer,
        styles[`txtContainer_${type}`]]} >
          <Text style={[styles.txt1, styles
          [`txt1_${type}`]]} > {text} </
          Text>
        </View>
        <View style={[styles.extContainer, styles[`extContainer_${type}`]]} >
          <Text style={[styles.extText, styles[`extText_${type}`]]} > {extText} </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default UpperExplorePortion

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ededef',
    backgroundColor: 'white,'
  },
  rootContainer_PrimaryQ: {
    width: '100%',
    height: 55,
    alignItems: 'center',
    marginLeft: 30,

  },
  rootContainer_PrimaryX: {
    width: '100%',
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
    borderBottomWidth: 8,
    // borderBottomColor: '#ededed',
    borderBottomColor: '#f7f5f5',

  },
  iconContainer: {
    marginLeft: 15,
  },
  txtContainer: {
    marginLeft: 10,
  },
  txt1_PrimaryQ: {
    textTransform: 'uppercase',
    color: '#595957',
  },
  txt1: {
    fontSize: 20,
    color: '#413F42',
    textTransform: 'capitalize',
    // fontWeight: '500',
    fontFamily: 'Roboto',
  },
  extContainer: {},
  extText: {},
  extContainer_PrimaryJ: {
    marginLeft: 5,
    backgroundColor: '#d126a9',
    borderRadius: 1,
  },
  extText_PrimaryJ: {
    color: 'white',
    fontWeight: '800'
  },
})