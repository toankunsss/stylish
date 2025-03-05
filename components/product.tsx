import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { AirbnbRating, Rating } from "react-native-ratings";
import { count } from "firebase/firestore";
const product = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "data:image/webp;base64,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",
        }}
        style={styles.imageStyle}
      />
      <View style={styles.content}>
        <Text style={styles.tittle}>Black Winter</Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.describe}>
          Autumn And Winter Casual cotton-padded jacket...
        </Text>
        <Text style={styles.price}>$499</Text>
        <View style={styles.starCout}>
          <Rating
            type="star"
            ratingCount={5}
            showRating={false}
            imageSize={10}
          />
          <Text style={styles.count}>6,890</Text>
        </View>
      </View>
    </View>
  );
};

export default product;

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: "auto",
    resizeMode: "cover",
    aspectRatio: 1,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "red",
    margin: 0,
  },
  container: {
    width: "47%",
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 3,
  },
  starCout: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  tittle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  describe: {
    fontSize: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 12,
    paddingVertical: 5,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  count: {
    fontSize: 10,
    color: "#A4A9B3",
  },
});
