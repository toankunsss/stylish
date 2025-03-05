import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
// import Homescreen from '../screen/home/homescreen'
// import Header from '../../components/header'
const categories = [
  { id: "1", name: "Beuty", image: require("../../../assets/beauty.jpg") },
  { id: "2", name: "Fashion", image: require("../../../assets/fashion.jpg") },
  { id: "3", name: "Kids", image: require("../../../assets/kids.jpg") },
  { id: "4", name: "Mems", image: require("../../../assets/men.jpg") },
  { id: "5", name: "Womens", image: require("../../../assets/women.jpg") },
  { id: "6", name: "Gifts", image: require("../../../assets/men.jpg") },
];
const home = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.featuredStyle}
      >
        {categories.map((item) => (
          <View key={item.id} style={styles.categoriesItem}>
            <Image source={item.image} style={styles.imageStyle} />
            <Text style={styles.textCategory}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  featuredStyle: {
    backgroundColor: "#fff",
    paddingLeft: 13,
    borderRadius: 10,
    marginLeft: 5,
    height: 32,
  },
  categoriesItem: {
    alignItems: "center",
    marginTop: 10,
    marginRight: 18,
  },
  textCategory: {
    fontSize: 10,
    color: "#21003D",
    marginVertical: 3,
  },
});
