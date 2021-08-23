// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import Album from "./components/Album";
import BottomTab from "./components/BottomTab";
import LoadAssets from "./components/LoadAssets";

const assets = [
  require("./assets/Jan-Blomqvist.jpg"),
  require("./assets/thebay.jpg"),
];

export default function App() {
  return (
    <LoadAssets {...{ assets }}>
      <StatusBar barStyle="light-content" />
      <Album />
      <BottomTab />
    </LoadAssets>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
