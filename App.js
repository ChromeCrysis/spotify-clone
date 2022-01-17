import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./src/pages/Main/main";
import TabBar from "./src/components/TabBar";
import Album from "./src/pages/Album";
import Player from "./src/pages/Player/player"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Album"
          component={Album}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Player"
          component={Player}
          options={{
            title: "",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <TabBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191414",
    alignItems: "center",
    justifyContent: "center",
  },
});
