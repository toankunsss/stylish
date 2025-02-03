import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/formfield'
import { Link, useRouter } from 'expo-router'; // Để sử dụng điều hướng
import CustomButton from '../../components/customButton';
import Footer from '../../components/footer';

const signup = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    username:'',
  })
  const router = useRouter();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Create An{'\n'}account</Text>
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
                    <FormField
            title=""
            Value={form.password}
            placeholder="ConfirmPassword"
            handldeChangeText={(value) => setForm({ ...form, password: value })}
            otherStyles={styles.input}
            secureTextEntry={true}
          />
          <Text style={styles.param}>By clicking the <Text style={styles.forgot}>Register </Text>button, you agree{'\n'}to the public offer</Text>
          <CustomButton
            title="Create Account"
            handledPress={() => router.push('home')}
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
            title={<Text>I Already Have an Account</Text>} 
            herfLink={<Link href={'./sign-in'} ><Text style={{color: "red", textDecorationLine: 'underline' }}>Login</Text></Link>}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signup

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
    alignSelf: 'flex-start', // Giữ tiêu đề ở đầu bên trái
    marginTop: 30,
  },
  forgot:{
    alignSelf: 'flex-end',
    marginBottom: 10,
    color: '#F83758',
    fontSize: 12,
  },
  param:{
    alignSelf: 'flex-start',
    marginBottom: 10,
    color: '#676767',
    fontSize: 12,
  }
});
