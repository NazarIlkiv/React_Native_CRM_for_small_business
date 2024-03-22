import { View, Text, TouchableOpacity, Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { useAuth } from "../../context/authContext";
import { SimpleLineIcons } from "@expo/vector-icons";

//Localization

const SettingsMenu = () => {
  const { logout, locale, changeLocale, i18n } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <View className="flex-1 ">
      <View className="flex-row justify-between mx-4 items-center gap-3 mb-4 pb-2 border-b border-b-neutral-200 ">
        <View>
          <Text style={{ fontSize: hp(2) }} className="font-semibold">
            {i18n.t("Language")}
          </Text>
        </View>
        <View style={{ width: wp(40) }}>
          <Picker
            selectedValue={locale}
            onValueChange={(itemValue, itemIndex) => changeLocale(itemValue)}
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Українська" value="ua" />
          </Picker>
        </View>
      </View>
      <View className="flex-row justify-between mx-4 items-center gap-3 mb-4 pb-2 border-b border-b-neutral-200">
        <View>
          <Text className="font-semibold" style={{ fontSize: hp(2) }}>
            {i18n.t("DarkMode")}
          </Text>
        </View>
        <View style={{ width: wp(40) }}>
          <Switch value={false} />
        </View>
      </View>
      <View className="flex-row justify-center items-center ">
        <View
          style={{
            marginTop: 20,
            padding: 18,
            paddingHorizontal: 50,
            backgroundColor: "rgb(129 140 248)",
            borderRadius: 20,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={handleLogout}
          >
            <SimpleLineIcons
              name="logout"
              style={{ fontSize: hp(3), marginRight: 10 }}
              color="white"
            />
            <Text
              style={{ fontSize: hp(2.5), color: "white" }}
              className="text-white font-bold tracking-wider"
            >
              {i18n.t("Logout")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingsMenu;
