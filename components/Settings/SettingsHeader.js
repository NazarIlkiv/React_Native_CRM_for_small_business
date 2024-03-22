import { View, Text, Platform } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { blurhash } from "@/utils/common";
import { useAuth } from "@/context/authContext";

const ios = Platform.OS == "ios";
const HomeHeader = () => {
  const { user } = useAuth();

  const { top } = useSafeAreaInsets();

  return (
    <View
      className="flex-row justify-between px-5 bg-indigo-400 pb-6 rounded-b-3xl shadow"
      style={{
        paddingTop: ios ? top : top + 10,
        backgroundColor: "rgb(129 140 248)",
        flexDirection: "row",
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
      }}
    >
      <View>
        <Image
          style={{ height: hp(15), aspectRatio: 1, borderRadius: 100 }}
          source={user?.profileUrl}
          placeholder={blurhash}
          transition={500}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
