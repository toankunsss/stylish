import { StyleSheet, Text, View, Image } from 'react-native'
import React ,{useEffect} from 'react'
import { useRouter } from 'expo-router'
const splash = () => {
  const router = useRouter();
  useEffect(()=> {
    const timer=setTimeout(()=>{
        router.replace('/Onboarding/Onboardingscreen');
    },3000)
    return ()=> clearTimeout(timer);
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../assets/Vector.png')}   style={{ width: 300, height: 300, resizeMode: 'contain' }} 
        />
    </View>
  )
}

export default splash

