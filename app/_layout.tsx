import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import React from "react";
export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}
