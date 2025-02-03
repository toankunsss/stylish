import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from '../components/splash'
const index = () => {
  return (
    <View style={styles.container}>
        <Splash/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})