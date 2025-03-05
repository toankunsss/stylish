import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const productSecond = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/avatar.jpg")} resizeMode="stretch" />
    </View>
  );
};

export default productSecond;

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: "auto",
    borderWidth: 1,
    backgroundColor: "red",
  },
});
