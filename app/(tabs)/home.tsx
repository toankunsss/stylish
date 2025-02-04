import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screen/home/homescreen'
const home = () => {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})