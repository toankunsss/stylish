import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { Link, useRouter } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import { AirbnbRating, Rating } from "react-native-ratings";
import ButtonShop from "../../../components/buttonShop";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Product from "../../../components/product";
const images = [
  "https://tradehome.com/cdn/shop/files/Homepage_Mobile-Template_680x1240_89f68587-f1fe-488e-9100-2951665eb004_800x.jpg?v=1736952903",
  "https://images.pexels.com/photos/30683516/pexels-photo-30683516.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/30695954/pexels-photo-30695954/free-photo-of-c-p-doi-lang-m-n-v-i-bong-bay-trai-tim-ngoai-tr-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];
const sizes = ["6UK", "7UK", "8UK", "9UK", "10UK"];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Shop = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null); // Tạo ref cho ScrollView
  const [imgActive, setImgActive] = useState(0);

  const onchange = (nativeEvent: any) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  };

  const nextImage = () => {
    if (imgActive < images.length - 1) {
      scrollRef.current?.scrollTo({
        x: (imgActive + 1) * (WIDTH - 40),
        animated: true,
      });
      setImgActive(imgActive + 1);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} />
        </TouchableOpacity>
        <Link href="../../screen/checkout/checkout" style={styles.cartIcon}>
          <FontAwesome6 name="cart-shopping" size={14} />
        </Link>
      </View>

      <View>
        <ScrollView
          ref={scrollRef} // Gán ref vào ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((e, index) => (
            <Image
              key={index}
              resizeMode="cover"
              source={{ uri: e }}
              style={styles.wrap}
            />
          ))}
        </ScrollView>

        {/* Chấm trạng thái */}
        <View style={styles.wrapDot}>
          {images.map((_, index) => (
            <Text
              key={index}
              style={imgActive === index ? styles.activeDot : styles.dot}
            >
              •
            </Text>
          ))}
        </View>
        <TouchableOpacity onPress={nextImage} style={styles.nextButton}>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Text>Size: 7UK</Text>
      <View style={styles.containerFS}>
        {sizes.map((size) => (
          <TouchableOpacity
            style={[
              styles.sizeProduct,
              selectedSize === size && { backgroundColor: "#FA7189" },
            ]}
            key={size}
            onPress={() => setSelectedSize(size)}
          >
            <Text
              style={[
                styles.colorFont,
                selectedSize === size && { color: "#fff" },
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text>NIKE Sneakers</Text>
      <Text>Vision Alta Men's Shoes Size (All Colours)</Text>
      <View style={styles.starCout}>
        <Rating
          type="star"
          ratingCount={5}
          showRating={false}
          imageSize={15}
          startingValue={3}
          readonly
        />
        <Text style={styles.count}>6,890</Text>
      </View>
      <Text>$1,500</Text>
      <Text>Product Deatails</Text>
      <Text>Perhaps the most icanic sneaker of all-time</Text>
      <View style={styles.parentUtility}>
        <View style={styles.utility}>
          <EvilIcon name="location" size={16} color="#828282" />
          <Text style={styles.textUtility}>Nearest Store</Text>
        </View>
        <View style={styles.utility}>
          <EvilIcon name="lock" size={16} color="#828282" />
          <Text style={styles.textUtility}>Vip</Text>
        </View>
        <View style={styles.utility}>
          <EvilIcon name="location" size={16} color="#828282" />
          <Text style={styles.textUtility}>Return policy</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 25, marginLeft: 10 }}>
        <ButtonShop
          icon="cart-outline"
          text="Go to cart"
          color="#4B59F7"
          link="../../screen/checkout/checkout"
        />
        <ButtonShop
          icon="gesture-tap-hold"
          text="Buy Now"
          color="#3EB44C"
          link="../../screen/shoppingcart/shoppingcart"
        />
      </View>
      <View style={styles.tranfer}>
        <Text style={{ fontSize: 14, fontWeight: "500" }}>Delivery in </Text>
        <Text style={{ fontSize: 21, fontWeight: "bold" }}>1 within Hour</Text>
      </View>
      <Text style={{ fontSize: 21, fontWeight: "bold" }}>Similar To</Text>
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
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Product />
        <Product />
      </View>
    </ScrollView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    flex: 1,
    paddingHorizontal: 20,
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
  wrap: {
    width: WIDTH - 40,
    height: HEIGHT * 0.25,
    borderRadius: 10,
    overflow: "hidden",
  },
  wrapDot: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  dot: {
    fontSize: 35,
    lineHeight: 35,
    color: "#DEDBDB",
  },
  activeDot: {
    fontSize: 45,
    lineHeight: 41,
    color: "#F83758",
  },
  nextButton: {
    position: "absolute",
    backgroundColor: "#BBB",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    right: 10,
    top: "30%",
  },
  starCout: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  count: {
    fontSize: 15,
    color: "#A4A9B3",
  },
  containerFS: {
    flexDirection: "row",
    gap: 6,
  },
  sizeProduct: {
    borderWidth: 1,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderColor: "#FA7189",
  },
  colorFont: {
    color: "#FA7189",
  },
  utility: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#828282",
    borderRadius: 4,
    padding: 5,
  },
  textUtility: {
    fontSize: 10,
  },
  parentUtility: {
    flexDirection: "row",
    gap: 6,
    marginVertical: 10,
    marginBottom: 15,
  },
  tranfer: {
    paddingVertical: 10,
    marginVertical: 20,
    paddingLeft: 15,
    borderRadius: 5,
    backgroundColor: "#FFCCD5",
  },
  containerFeather: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
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
