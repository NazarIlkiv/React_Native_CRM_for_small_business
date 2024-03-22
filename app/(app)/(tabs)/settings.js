import { View, Text } from "react-native";
import React from "react";
import SettingsHeader from "../../../components/Settings/SettingsHeader";
import SettingsMenu from "../../../components/Settings/SettingsMenu";

const settings = () => {
  return (
    <View className="flex-1 bg-white ">
      <SettingsHeader />
      <SettingsMenu />
    </View>
  );
};

export default settings;
