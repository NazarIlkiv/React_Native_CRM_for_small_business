import React from "react";
import { Modal, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const FullScreenImage = ({ imageURL, onClose, isOpen }) => {
  return (
    <Modal visible={isOpen} transparent={true}>
      <View className="flex-1 bg-white p-4 rounded-xl justify-center items-center">
        <TouchableOpacity style={{ flex: 1 }} onPress={onClose}>
          <Image
            source={{ uri: imageURL }}
            style={{ flex: 1, width: wp(95), height: wp(80) }}
            contentFit="contain"
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FullScreenImage;
