import { View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
const splash = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar hidden />
        <Image source={require('../assets/Vector.png')}   style={{ width: 300, height: 300, resizeMode: 'contain' }}/>
    </View>
  )
}

export default splash

