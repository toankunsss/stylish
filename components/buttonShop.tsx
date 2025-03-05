import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Materrial from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
const buttonShop = ({ icon, text, color, link }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => router.push(link)}
    >
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Materrial name={icon} size={20} color="white" />
      </View>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default buttonShop;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingRight: 20,
    paddingLeft: 50,
    borderRadius: 6,
  },
  iconContainer: {
    position: "absolute",
    left: -10,
    top: "-30%",
    backgroundColor: "#4B59F7",
    padding: 13,
    borderRadius: "50%",
    elevation: 5,
  },
  textButton: {
    color: "white",
    fontSize: 16,
    lineHeight: 17,
  },
});
