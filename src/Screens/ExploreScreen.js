import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import UpperExplorePortion from '../Components/ExploreScreen Component/UpperExplorePortion'
const ExploreScreen = () => {
  return (
    <ScrollView style={styles.rootContainer} >
      <UpperExplorePortion
        text='Myntra Insider'
        Icon='crown'
        type='PrimaryJ'
        extText='New'
      />
      <UpperExplorePortion
        text='Myntra Live'
        Icon='antenna'
        type='PrimaryJ'
        extText='New'
      />
      <UpperExplorePortion
        text='Myntra Luxe'
        Icon='diamond-stone'
      />
      <UpperExplorePortion
        text='Gift Cards'
        Icon='gift'
      />
      <UpperExplorePortion
        text='Myntra Mall'
        Icon='shopping'
      />
      <View style={styles.BorderColor} />
      <UpperExplorePortion
        text='My Prizes'
        Icon='trophy'
        type='PrimaryJ'
        extText='New'
      />
      <UpperExplorePortion
        text='Myntra Mall'
        Icon='cog-play'
      />
      <View style={styles.BorderColor} />
      <UpperExplorePortion
        text='Refer & Earn'
        Icon='heart-cog-outline'
      />
      <UpperExplorePortion
        text='Scan for Coupon'
        Icon='qrcode-scan'
      />
      <UpperExplorePortion
        text='Myntra Fashion Superstar'
        Icon='star-face'
      />
      <UpperExplorePortion
        text='Myntra Masterclass'
        Icon='alpha-m-circle-outline'
      />
    </ScrollView>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  rootContainer: {},
  BorderColor: {
    borderBottomWidth: 8,
    borderBottomColor: '#ededed',
  },
})