import { View, Text, TouchableOpacity, Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { SimpleLineIcons } from "@expo/vector-icons";
// import { translations } from "@/localizations/localizations";
// import * as Localization from "expo-localization";
// import { I18n } from "i18n-js";

//Localization

// const i18n = new I18n(translations);

// i18n.locale = Localization.locale;
// i18n.enableFallback = true;

const SettingsMenu = () => {
  const { logout } = useAuth();
  // const [locale, setLocale] = useState(i18n.locale);

  const handleLogout = () => {
    logout();
  };

  return (
    <View className="flex-1 ">
      <View className="flex-row justify-between mx-4 items-center gap-3 mb-4 pb-2 border-b border-b-neutral-200 ">
        <View>
          <Text style={{ fontSize: hp(2) }} className="font-semibold">
            Language
          </Text>
        </View>
        <View style={{ width: wp(40) }}>
          <Picker>
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Ukrainian" value="ua" />
          </Picker>
        </View>
      </View>
      <View className="flex-row justify-between mx-4 items-center gap-3 mb-4 pb-2 border-b border-b-neutral-200">
        <View>
          <Text className="font-semibold" style={{ fontSize: hp(2) }}>
            Dark Mode
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
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingsMenu;
