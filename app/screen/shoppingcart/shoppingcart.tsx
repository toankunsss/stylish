import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Dropdown } from "react-native-element-dropdown";
const index = () => {
  const { id, name, image, rating, price, oldPrice, discount, variations } =
    useLocalSearchParams();
  const variationOptions =
    typeof variations === "string"
      ? variations.split(",").map((v) => ({ label: v.trim(), value: v.trim() }))
      : [];
  const [selectedVariation, setSelectedVariation] = useState(
    variationOptions.length > 0 ? variationOptions[0].value : null
  );
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Shopping Bag</Text>
        <Link href="../../screen/checkout/checkout" style={styles.cartIcon}>
          <FontAwesome6 name="heart" size={20} />
        </Link>
      </View>
      <View>
        {typeof image === "string" && (
          <Image source={{ uri: image }} style={{ width: 123, height: 153 }} />
        )}
        <View>
          <Text>{name}</Text>
          <View>
            <Dropdown
              style={styles.dropdow}
              data={variationOptions}
              labelField="label"
              valueField="value"
              placeholder="Chosen color"
              value={selectedVariation}
              onChange={(item) => setSelectedVariation(item.value)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  cartIcon: {
    borderRadius: 20,
    backgroundColor: "#F2F2F2",
    padding: 10,
  },
  dropdow: {
    width: 86,
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: "#F2F2F2",
  },
});
