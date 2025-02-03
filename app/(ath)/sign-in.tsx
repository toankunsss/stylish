import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/formfield'
import { Link, useRouter } from 'expo-router'; // Để sử dụng điều hướng
import CustomButton from '../../components/customButton';
import Footer from '../../components/footer';
const signin = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const router = useRouter();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome{'\n'}Back!</Text>
          <FormField
            title=""
            Value={form.email}
            placeholder="Username or Email"
            handldeChangeText={(value) => setForm({ ...form, email: value })}
            otherStyles={styles.input}
            ketType="email-address"
          />
          <FormField
            title=""
            Value={form.password}
            placeholder="Password"
            handldeChangeText={(value) => setForm({ ...form, password: value })}
            otherStyles={styles.input}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.touchForgot} onPress={() => router.push('./forgot')}><Text style={styles.forgot}>Forgot Password?</Text></TouchableOpacity>
          <CustomButton
            title="Login"
            handledPress="/home"
            containerStyles={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F83758',
              borderRadius: 5,
              padding: 10,
              marginVertical: 10,
              width: 317,
              height: 55,
              marginTop: 40,
            }} 
            TextStyles={{fontSize: 20, color: '#fff',fontWeight: 'SemiBold'}} 
            isLoading={undefined}         
          />
          <Footer 
            title={<Text>Create An Account</Text>} 
            herfLink={<Link href="./signup"><Text style={{ color: "red", textDecorationLine: 'underline' }}>Sign Up</Text></Link>}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 32,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center', // Căn giữa nội dung theo chiều dọc
    borderWidth: 1,
    borderColor: '#A8A8A9',
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: 317,
    height: 55,
  },
  title: {
    fontWeight: '800',
    fontSize: 36,
    color: '#000000',
    alignSelf: 'flex-start', // Giữ tiêu đề ở đầu bên trái\
    marginTop: 30,
    fontFamily: 'Roboto ThinItalic',
  },
  forgot:{
    alignSelf: 'flex-end',
    marginBottom: 10,
    color: '#F83758',
    fontSize: 12,
  },
  touchForgot:{
    alignSelf: 'flex-end',
    marginBottom: 10,
  }

});
