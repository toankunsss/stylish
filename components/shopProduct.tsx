import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";

interface ProductProps {
  item: {
    id: string;
    name: string;
    image: string;
    rating: number;
    price: number;
    oldPrice: number;
    discount: string;
    variations: string[];
  };
}

const ProductItem: React.FC<ProductProps> = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.variations}>
            Variations: {item.variations.join("  ")}
          </Text>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={14}
              readonly
              startingValue={item.rating ?? 0}
            />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>

          {/* Giá sản phẩm */}
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.discount}>upto {item.discount} off</Text>
              <Text style={styles.oldPrice}>$ {item.oldPrice.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          marginTop: 15,
          borderColor: "#BBBBBB",
          paddingVertical: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "500" }}>
          Total Order (1) :
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "700" }}>$45.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 3,
    padding: 10,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  variations: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 4,
  },
  discount: {
    fontSize: 8,
    color: "red",
    marginLeft: 8,
  },
  oldPrice: {
    fontSize: 12,
    color: "#777",
    textDecorationLine: "line-through",
    marginLeft: 8,
  },
});

export default ProductItem;
