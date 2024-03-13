import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FullScreenImage from "@/components/custom/FullScreenImage";

const MessageItem = ({ message, currentUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageURL, setSelectedImageURL] = useState("");

  const handleImagePress = (imageURL) => {
    setSelectedImageURL(imageURL);
    setFullScreenVisible(true);
  };

  if (currentUser?.userId === message?.userId) {
    // My message
    return (
      <View className="flex-row justify-end mb-3 mr-3">
        <View style={{ width: wp(80) }}>
          {message.imageURL ? (
            <View className="flex self-end p-3 rounded-2xl bg-white border border-neutral-200">
              <TouchableOpacity onPress={() => setModalOpen(true)}>
                <Image
                  source={{ uri: message.imageURL }}
                  style={{ width: wp(40), height: wp(40), borderRadius: wp(3) }}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View className="flex self-end p-3 rounded-2xl bg-white border border-neutral-200">
              <Text style={{ fontSize: hp(1.9) }}>{message?.text}</Text>
            </View>
          )}

          {/* Render full screen image if image is clicked */}

          <FullScreenImage
            imageURL={message.imageURL}
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        </View>
      </View>
    );
  } else {
    // Other user's message
    return (
      <View style={{ width: wp(80) }} className="ml-3 mb-3">
        {message.imageURL ? (
          <View className="flex self-start p-3 px-4 rounded-2xl bg-indigo-100 border border-indigo-200">
            <Image
              source={{ uri: message.imageURL }}
              style={{ width: wp(40), height: wp(40), borderRadius: wp(3) }}
            />
          </View>
        ) : (
          <View className="flex self-start p-3 px-4 rounded-2xl bg-indigo-100 border border-indigo-200">
            <Text style={{ fontSize: hp(1.9) }}>{message?.text}</Text>
          </View>
        )}
      </View>
    );
  }
};

export default MessageItem;
