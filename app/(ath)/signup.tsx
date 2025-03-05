import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/formfield';
import { useRouter } from 'expo-router'; // Để sử dụng điều hướng
import CustomButton from '../../components/customButton';
import Footer from '../../components/footer';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { user } from '../../data/user';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"; // Import Firestore

const Signup = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirm: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    if(form.password && form.confirm && form.email) {
      setIsDisabled(false);
    }else{
      setIsDisabled(true);
    };
  }, [form.password, form.confirm, form.email]);
  useEffect(() => {
    if (form.password && form.confirm) {
      setError(form.password !== form.confirm ? 'Xác nhận mật khẩu không trùng khớp!' : '');
      setIsDisabled(form.password !== form.confirm);
    }
  }, [form.password, form.confirm]);

  
  
  const renderButtonRegister = () => {};

  const router = useRouter();
  const handleSignup = async () => {
    console.log("Form Data:", form);
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;
  
      console.log("User:", user);
  
      // Tạo document trong collection "users"
      await setDoc(doc(db, "users", user.uid), {
        email: form.email,
        createdAt: new Date().toISOString(),
        uid: user.uid,
      });
  
      console.log("User added to Firestore");
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
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
          {error && <Text style={{color: 'red'}}>{error}</Text>}
          <Text style={styles.param}>
            By clicking the <Text style={styles.forgot}>Register </Text>button, you agree{'\n'}to the public offer.
          </Text>

          <CustomButton
            title="Create Account"
            handleChangeText={handleSignup}
            containerStyles={styles.buttonContainer}
            TextStyles={styles.buttonText}
            isLoading={isDisabled}
          />

          <Footer 
            title={<Text>I Already Have an Account</Text>} 
            hrefLink={
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
