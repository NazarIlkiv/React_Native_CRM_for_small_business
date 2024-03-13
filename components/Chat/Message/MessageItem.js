import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FullScreenImage from "@/components/custom/FullScreenImage";
import { formatDate, formatTime } from "@/utils/common";

const MessageItem = ({ message, currentUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageURL, setSelectedImageURL] = useState("");

  const handleImagePress = (imageURL) => {
    setSelectedImageURL(imageURL);
    setFullScreenVisible(true);
  };

  const renderTime = () => {
    if (message?.createdAt) {
      const messageDate = new Date(message.createdAt.seconds * 1000);
      const currentDate = new Date();

      // Check if message was sent today
      if (
        messageDate.getDate() === currentDate.getDate() &&
        messageDate.getMonth() === currentDate.getMonth() &&
        messageDate.getFullYear() === currentDate.getFullYear()
      ) {
        return formatTime(messageDate);
      }

      // Check if message was sent yesterday
      const yesterday = new Date(currentDate);
      yesterday.setDate(currentDate.getDate() - 1);
      if (
        messageDate.getDate() === yesterday.getDate() &&
        messageDate.getMonth() === yesterday.getMonth() &&
        messageDate.getFullYear() === yesterday.getFullYear()
      ) {
        return "Yesterday";
      }

      // If not today or yesterday, return formatted date
      return formatDate(messageDate);
    }
    return ""; // Return empty string if message or createdAt is undefined
  };

  if (currentUser?.userId === message?.userId) {
    // My message
    return (
      <View className="flex-row justify-end mb-3 mr-3">
        <View style={{ width: wp(80) }}>
          {/* Render full screen image if image is clicked */}

          <FullScreenImage
            imageURL={message.imageURL}
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />

          {message.imageURL ? (
            <View className="flex self-end p-3 rounded-2xl bg-white border border-neutral-200">
              <TouchableOpacity onPress={() => setModalOpen(true)}>
                <Image
                  source={{ uri: message.imageURL }}
                  style={{ width: wp(40), height: wp(40), borderRadius: wp(3) }}
                />
                <Text style={{ fontSize: hp(1.3), paddingTop: 5 }}>
                  {renderTime()}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className="flex self-end p-3 rounded-2xl bg-white border border-neutral-200">
              <Text style={{ fontSize: hp(1.9) }}>{message?.text}</Text>
              <Text style={{ fontSize: hp(1.3), paddingTop: 5 }}>
                {renderTime()}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  } else {
    // Other user's message
    return (
      <View style={{ width: wp(80) }} className="ml-3 mb-3">
        {/* Render full screen image if image is clicked */}

        <FullScreenImage
          imageURL={message.imageURL}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
        {message.imageURL ? (
          <View className="flex self-start p-3 px-4 rounded-2xl bg-indigo-100 border border-indigo-200">
            <TouchableOpacity onPress={() => setModalOpen(true)}>
              <Image
                source={{ uri: message.imageURL }}
                style={{ width: wp(40), height: wp(40), borderRadius: wp(3) }}
              />
              <Text style={{ fontSize: hp(1.3), paddingTop: 5 }}>
                {renderTime()}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="flex self-start p-3 px-4 rounded-2xl bg-indigo-100 border border-indigo-200">
            <Text style={{ fontSize: hp(1.9) }}>{message?.text}</Text>
            <Text style={{ fontSize: hp(1.3), paddingTop: 5 }}>
              {renderTime()}
            </Text>
          </View>
        )}
      </View>
    );
  }
};

export default MessageItem;
