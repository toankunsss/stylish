import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Product from "../../../components/product";
import ProductSecond from "../../../components/productSecond";
const Wishlist = () => {
  return (
    <View style={styles.container}>
      <Product />
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
