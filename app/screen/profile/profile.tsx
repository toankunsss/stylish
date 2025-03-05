import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import CustomButton from "../../../components/customButton";
const profile = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ position: "absolute", left: -10 }}
        >
          <Ionicons name="chevron-back" size={28} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Checkout</Text>
      </View>
      <ImageBackground
        source={require("../../../assets/avatar.jpg")}
        style={styles.imageBackStyle}
        imageStyle={{ borderRadius: 40 }}
      >
        <View style={styles.iconView}>
          <EvilIcons name="pencil" size={22} color="#fff" />
        </View>
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.tittle}>Personal Details</Text>
        <Text style={styles.textInput}>Email Address</Text>
        <TextInput placeholder="Email..." style={styles.textInputStyle} />
        <Text style={styles.textInput}>Password</Text>
        <TextInput
          placeholder="Password..."
          secureTextEntry
          style={styles.textInputStyle}
        />
        <TouchableOpacity>
          <Text
            style={{
              alignSelf: "flex-end",
              textDecorationLine: "underline",
              color: "#F83758",
              marginTop: 10,
            }}
          >
            Change Password
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 0.2,
            marginVertical: 20,
            borderColor: "#C4C4C4",
          }}
        />
        <Text style={styles.tittle}>Bunsiness Address Details</Text>
        <Text style={styles.textInput}>Pincode</Text>
        <TextInput placeholder="Code..." style={styles.textInputStyle} />
        <Text style={styles.textInput}>Addresss</Text>
        <TextInput placeholder="Address..." style={styles.textInputStyle} />
        <Text style={styles.textInput}>City</Text>
        <TextInput placeholder="City..." style={styles.textInputStyle} />
        <Text style={styles.textInput}>State</Text>
        <TextInput placeholder="State..." style={styles.textInputStyle} />
        <Text style={styles.textInput}>Country</Text>
        <TextInput placeholder="Code..." style={styles.textInputStyle} />
        <View
          style={{
            borderWidth: 0.2,
            marginVertical: 20,
            borderColor: "#C4C4C4",
          }}
        />
        <Text style={styles.tittle}>Bank Account Details</Text>
        <Text style={styles.textInput}>Bank Account Number</Text>
        <TextInput placeholder="Number..." style={styles.textInputStyle} />
        <Text style={styles.textInput}>Account Holder's Name</Text>
        <TextInput placeholder="Name..." style={styles.textInputStyle} />
        <Text style={styles.textInput}>IFSC Code</Text>
        <TextInput placeholder="IFSC..." style={styles.textInputStyle} />
        <CustomButton
          title={"Save"}
          handleChangeText={() => router.push("/")}
          containerStyles={styles.button}
          TextStyles={styles.textbutton}
          isLoading={false}
        />
      </ScrollView>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    padding: 35,
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    height: 52,
    borderRadius: 8,
    backgroundColor: "#F83758",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 35,
  },
  textbutton: {
    color: "#fff",
    fontSize: 15,
  },
  imageBackStyle: {
    width: 80,
    height: 80,
    marginHorizontal: "auto",
    marginVertical: 20,
  },
  iconView: {
    width: 30,
    height: 30,
    backgroundColor: "#4392F9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingBottom: 5,
    borderWidth: 3,
    borderColor: "#fff",
    position: "absolute",
    bottom: 0,
    right: -5,
  },
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#C8C8C8",
    paddingHorizontal: 20,
  },
  tittle: {
    fontWeight: "700",
    fontSize: 18,
  },
  textInput: {
    marginTop: 18,
    marginBottom: 11,
  },
});
