import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/header'
const Homescreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})