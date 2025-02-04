import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/formfield';
import { useRouter } from 'expo-router'; // Để sử dụng điều hướng
import CustomButton from '../../components/customButton';
import Footer from '../../components/footer';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
const Signup = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirm: '',
  });

  const router = useRouter();

  const handleSignup = () => {
    console.log("Form Data:", form); // In dữ liệu nhập vào
    createUserWithEmailAndPassword(auth, form.email, form.password).then((userCredential) => {
      console.log("User:", userCredential.user);
    }).catch((error) => {
      console.log("Error:", error);
    });
  };

  return (
    <SafeAreaView style={styles.fullcontainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Create An{'\n'}Account</Text>
          
          <FormField
            title=""
            value={form.email}
            placeholder="Username or Email"
            handldeChangeText={(value) => setForm({ ...form, email: value.nativeEvent.text })}
            otherStyles={styles.input}
            keyboardType="email-address"
          />

          <FormField
            title=""
            value={form.password}
            placeholder="Password"
            handldeChangeText={(value) => setForm({ ...form, password: value.nativeEvent.text })}
            otherStyles={styles.input}
            secureTextEntry={true}
          />

          <FormField
            title=""
            value={form.confirm}
            placeholder="Confirm Password"
            handldeChangeText={(value) => setForm({ ...form, confirm: value.nativeEvent.text })}
            otherStyles={styles.input}
            secureTextEntry={true}
          />

          <Text style={styles.param}>
            By clicking the <Text style={styles.forgot}>Register </Text>button, you agree{'\n'}to the public offer.
          </Text>

          <CustomButton
            title="Create Account"
            handleChangeText={handleSignup}
            containerStyles={styles.buttonContainer}
            TextStyles={styles.buttonText}
            isLoading={false}
          />

          <Footer 
            title={<Text>I Already Have an Account</Text>} 
            herfLink={
              <Text 
                style={styles.loginLink} 
                onPress={() => router.push('/sign-in')}
              >
                Login
              </Text>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  fullcontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 32,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
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
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  forgot: {
    color: '#F83758',
    fontSize: 12,
  },
  param: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    color: '#676767',
    fontSize: 12,
  },
  buttonContainer: {
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
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  loginLink: {
    color: "red",
    textDecorationLine: 'underline',
  },
});
