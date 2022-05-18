import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const MiddlePortion = ({ text, Subtext, Icon, container, type }) => {
  return (
    <View style={styles.rootContainer}>

      <View style={styles.iconContainer} >
        <SimpleLineIcons name={Icon}
          size={25} />
      </View>
      <View style={styles.txtContainer} >
        <Text style={styles.txt1} > {text} </Text>
        <Text style={styles.txt2} > {Subtext} </Text>
      </View>
      <View style={[styles.lstlogo, styles[`container_${type}`]]} >
        <EvilIcons name='chevron-right' size={30} />
      </View>
    </View>
  )
}

export default MiddlePortion

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 80,
    // backgroundColor: '#bab8ba',
    alignItems: 'center',
    // marginLeft:10,
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
  },
  iconContainer: {
    marginLeft: 10,
  },
  txtContainer: {
    marginLeft: 10,
  },
  txt1: {
    fontSize: 20,
    // color: 'black',
    color: '#413F42',
    textTransform: 'capitalize',
    fontWeight: '500',

  },
  txt2: {
    color: '#bab8ba',
  },
  container_Primary: {
    left: 150,
  },
  container_Secondary: {
    left: 65,
  },
  container_Tertiary: {
    left: 160,
  }

})