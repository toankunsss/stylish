import { Tabs } from "expo-router";
import Feather from "react-native-vector-icons/Feather";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { height: 70, alignItems: "center", justifyContent: "center" },
        tabBarLabelStyle: { fontSize: 12, fontFamily: "Roboto", fontWeight: "regular" },
        tabBarActiveTintColor: "#EB3030", 
        tabBarInactiveTintColor: "#000000", 
        tabBarIcon: ({ focused, size = 24 }) => {
          let iconName = "home"; 
          switch (route.name) {
            case "home":
              iconName = "home";
              break;
            case "Wishlist":
              iconName = "heart";
              break;
            case "shop":
              iconName = "shopping-cart";
              break;
            case "search":
              iconName = "search";
              break;
            case "setting":
              iconName = "settings";
              break;
            default:
              break;
          }
          const iconColor = focused ? "#EB3030" : "#000000";
          return <Feather name={iconName} size={size} color={iconColor} />;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="Wishlist" options={{ title: "Wishlist" }} />
      <Tabs.Screen name="shop" options={{ title: "" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="setting" options={{ title: "Settings" }} />
    </Tabs>
  );
}
