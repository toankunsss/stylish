import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
const Header = () => {
  return (
    <View style = {styles.contrainer}>
    <View style={[styles.component, styles.menu]}>
      <Feather name="menu" color="#000000" size={24} />
    </View>
      <View style ={styles.logocontainer}><Image  source={require('../assets/Vector.png') } style={styles.logo}/></View>
      <View style ={styles.component}><Image source={require('../assets/avatar.png') } style={{resizeMode:'stretch'}}/></View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    contrainer: {
        justifyContent: 'space-between',
        alignItems: 'center',  
        height: 56,
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    logocontainer: {
    },
    component: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
      
    },
    menu:{
      backgroundColor: '#F2F2F2',
    },
    logo: {
        height: 35,
        width: 111,
        resizeMode: 'stretch',
    },

})