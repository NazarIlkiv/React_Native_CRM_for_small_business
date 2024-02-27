import { Text, View } from "react-native";

import React from "react";

import { Slot } from "expo-router";

import "../global.css";

export default function _layout() {
  return (
    <View className="flex-1 justify-center items-center">
      <Slot />
    </View>
  );
}
