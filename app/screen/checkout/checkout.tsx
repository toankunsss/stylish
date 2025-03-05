import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ShopProduct from "../../../components/shopProduct";
const WIDTH = Dimensions.get("window").width;
const products = [
  {
    id: "1",
    name: "Women’s Casual Wear",
    image:
      "https://images.pexels.com/photos/30455411/pexels-photo-30455411.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    rating: 4.8,
    price: 34.0,
    oldPrice: 64.0,
    discount: "33%",
    variations: ["Black", "Red"],
  },
  {
    id: "2",
    name: "Men’s Jacket",
    image:
      "https://images.pexels.com/photos/30751258/pexels-photo-30751258/free-photo-of-toa-thap-galata-mang-tinh-bi-u-t-ng-v-i-ki-n-truc-xung-quanh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    rating: 4.7,
    price: 45.0,
    oldPrice: 67.0,
    discount: "28%",
    variations: ["Green", "Grey"],
  },
];
const checkout = () => {
  const router = useRouter();
  return (
    <View style={{ marginHorizontal: 15, flex: 1 }}>
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
      <View
        style={{
          borderWidth: 0.5,
          marginVertical: 40,
          borderColor: "#BBBBBB",
          position: "absolute",
          width: WIDTH,
          left: -17,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          marginBottom: 10,
          gap: 5,
        }}
      >
        <SimpleLineIcons name="location-pin" size={15} />
        <Text style={{ fontSize: 14, fontWeight: "600" }}>
          Delivery Address
        </Text>
      </View>
      <View
        style={{
          padding: 15,
          backgroundColor: "white",
          elevation: 5,
          borderRadius: 4,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "500", marginBottom: 5 }}>
          Address
        </Text>
        <Text style={{ fontSize: 12 }}>216 St Paul's Rd, London</Text>
        <Text style={{ fontSize: 12 }}>Contact: </Text>
        <TouchableOpacity style={{ position: "absolute", right: 5, top: 5 }}>
          <MaterialCommunityIcons name="square-edit-outline" size={20} />
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: "600", marginBottom: 18 }}>Shopping List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "../../screen/shoppingcart/shoppingcart",
                params: {
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  rating: item.rating,
                  price: item.price,
                  oldPrice: item.oldPrice,
                  discount: item.discount,
                  variations: item.variations.join(", "),
                },
              })
            }
          >
            <ShopProduct item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default checkout;

const styles = StyleSheet.create({});
