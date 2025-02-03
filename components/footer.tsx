import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const footer = ({title,herfLink}) => {
  return (
    <View style={styles.container}>
      <Text>- OR Continue with -</Text>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/Facebook.png')} />
        <Image source={require('../assets/Google.png')} />
        <Image source={require('../assets/Apple.png')} />
      </View>
        <Text>{title} {herfLink} </Text>
    </View>
  )
}

export default footer

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    },
    iconContainer: {
        flexDirection: 'row',
        marginVertical: 40,

        gap: 20
      },
})