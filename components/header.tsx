import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  return (
    <>
      <View style={styles.contrainer}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.logocontainer}>
          <Image source={require("../assets/Vector.png")} style={styles.logo} />
        </View>
        <View style={styles.component}>
          <Link href="/screen/profile/profile">
            <Image
              source={require("../assets/avatar.png")}
              style={{ resizeMode: "stretch" }}
            />
          </Link>
        </View>
      </View>
      <>
        <View style={styles.containerSearch}>
          <Feather name="search" size={15} color="#BBBBBB" />
          <TextInput
            placeholder="Search any Product..."
            placeholderTextColor="#BBBBBB"
            style={styles.textInputDesign}
            value={text}
            onChangeText={setText}
          />
          <Feather name="mic" size={15} color="#BBBBBB" />
        </View>
        <View style={styles.containerFeather}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>ALL Featured</Text>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <View style={styles.featured}>
              <Text style={styles.textFeatured}>Sort</Text>
              <FontAwesome name="sort" size={14} />
            </View>
            <View style={styles.featured}>
              <Text style={styles.textFeatured}>Filter</Text>
              <FontAwesome name="filter" size={14} />
            </View>
          </View>
        </View>
      </>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  contrainer: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    flexDirection: "row",
    paddingHorizontal: 16,
    backgroundColor: "#F9F9F9",
  },
  logocontainer: {},
  component: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  menu: {
    backgroundColor: "#F2F2F2",
  },
  logo: {
    height: 35,
    width: 111,
    resizeMode: "stretch",
  },
  containerSearch: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginHorizontal: 17,
    backgroundColor: "#ffffff",
    borderRadius: 6,
  },
  containerFeather: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 17,
    marginVertical: 10,
  },
  textInputDesign: {
    flex: 1,
    fontSize: 14,
  },
  featured: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    backgroundColor: "#fff",
    gap: 5,
  },
  textFeatured: {
    fontSize: 14,
  },
});
