import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
const shoppingbag = () => {
  const router = useRouter();
  return (
    <View>
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
    </View>
  );
};

export default shoppingbag;

const styles = StyleSheet.create({});
