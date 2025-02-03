import {TouchableOpacity, Text} from 'react-native'
import React from 'react'
import { useRouter, Link } from 'expo-router';

const customButton = ({title,handledPress,containerStyles,TextStyles,isLoading}) => {
  const router = useRouter();
  return (
    
    <TouchableOpacity
        onPress={() => router.push(handledPress)}
        activeOpacity={0.7}
        style={containerStyles}
        disabled={isLoading}
    >
        <Text style={TextStyles}>{title}</Text>
    </TouchableOpacity>
  )
}

export default customButton

