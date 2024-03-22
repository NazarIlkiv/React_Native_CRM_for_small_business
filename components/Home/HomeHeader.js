import { View, Text, Platform } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { blurhash } from "@/utils/common";
import { useAuth } from "@/context/authContext";

const ios = Platform.OS == "ios";
const HomeHeader = () => {
  const { user, i18n } = useAuth();

  const { top } = useSafeAreaInsets();

  return (
    <View
      className="flex-row justify-between px-5 pb-6 rounded-b-3xl shadow"
      style={{
        paddingTop: ios ? top : top + 10,
        backgroundColor: "#24A19C",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
      }}
    >
      <View>
        <Text style={{ fontSize: hp(3) }} className="font-bold text-white">
          {i18n.t("Tasks")}
        </Text>
      </View>

      <View>
        <Image
          style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
          source={user?.profileUrl}
          placeholder={blurhash}
          transition={500}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
