import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Splash from '../components/splash'
import Signin from '../app/(ath)/sign-in'
import OnboardingScreen from '../app/Onboarding/Onboardingscreen'
const index = () => {
  const [loading, setLoading] = React.useState(false)
  const [isWelcome, setIsWelcome] = React.useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsWelcome(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <View style={styles.container}>
        {isWelcome ?(<Splash/>) : loading ? (<Signin/>) : (<OnboardingScreen/>)}
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