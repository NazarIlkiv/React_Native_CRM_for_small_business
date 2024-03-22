import { View, TextInput, Pressable, Alert, Keyboard } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ChatRoomHeader from "@/components/Chat/ChatRoomHeader";
import { useRouter } from "expo-router";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import MessageList from "@/components/Chat/Message/MessageList";
import { useAuth } from "@/context/authContext";
import { getRoomId } from "@/utils/common";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  Timestamp,
  doc,
  setDoc,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db, storage } from "@/firebaseConfig.js";
import * as ImagePicker from "expo-image-picker";

const ChatRoom = () => {
  const item = useLocalSearchParams(); // second user
  const { user } = useAuth(); // logged in user

  const router = useRouter();
  const [messages, setMessages] = useState([]);

  const textRef = useRef("");
  const inputRef = useRef(null);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    createRoomIfNotExists();

    let roomId = getRoomId(user?.userId, item?.userId);

    const docRef = doc(db, "rooms", roomId);
    const messagesRef = collection(docRef, "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));

    let unsub = onSnapshot(q, (snapshot) => {
      let allMessages = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setMessages([...allMessages]);
    });

    const KeyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      updateScrollView
    );

    return () => {
      unsub();
      KeyboardDidShowListener.remove();
    };
  }, []);

  const createRoomIfNotExists = async () => {
    // room id

    let roomId = getRoomId(user?.userId, item?.userId);
    await setDoc(doc(db, "rooms", roomId), {
      roomId,
      createdAt: Timestamp.fromDate(new Date()),
    });
  };

  const handleSendMessage = async () => {
    let message = textRef.current.trim();
    if (!message) return;

    try {
      let roomId = getRoomId(user?.userId, item?.userId);
      const docRef = doc(db, "rooms", roomId);
      const messagesRef = collection(docRef, "messages");
      textRef.current = "";
      if (inputRef) inputRef?.current.clear();

      const newDoc = await addDoc(messagesRef, {
        userId: user?.userId,
        text: message,
        profileUrl: user?.profileUrl,
        senderName: user?.username,
        createdAt: Timestamp.fromDate(new Date()),
      });
    } catch (e) {
      Alert.alert("Message", e.message);
    }
  };

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 1],
      quality: 1,
    });

    if (!result.canceled) {
      uploadImage(result.uri);
    }
  };

  const uploadImage = async (uri) => {
    try {
      const imageRef = ref(storage, `images/${Math.random().toString(36)}`);
      const response = await fetch(uri);
      const blob = await response.blob();
      await uploadBytes(imageRef, blob);
      const downloadURL = await getDownloadURL(imageRef);
      saveImageURLToFirebaseDatabase(downloadURL);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const saveImageURLToFirebaseDatabase = async (imageURL) => {
    try {
      let roomId = getRoomId(user?.userId, item?.userId);
      const docRef = doc(db, "rooms", roomId);
      const messagesRef = collection(docRef, "messages");

      const newDoc = await addDoc(messagesRef, {
        userId: user?.userId,
        imageURL: imageURL,
        profileUrl: user?.profileUrl,
        senderName: user?.username,
        createdAt: Timestamp.fromDate(new Date()),
      });
    } catch (error) {
      console.error("Error saving image URL to Firebase Database:", error);
    }
  };

  useEffect(() => {
    updateScrollView();
  }, [messages]);

  const updateScrollView = () => {
    setTimeout(() => {
      scrollViewRef?.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ChatRoomHeader user={item} router={router} />
      <View className="h-3 border-b border-b-neutral-300" />
      <View className="flex-1 justify-between bg-neutral-100 overflow-visible">
        <View className="flex-1">
          <MessageList
            scrollViewRef={scrollViewRef}
            messages={messages}
            currentUser={user}
          />
        </View>
        <View style={{ marginBottom: hp(11) }} className="pt-2">
          <View className="flex-row mx-3 justify-between bg-white p-2 border-neutral-300 rounded-full">
            <TextInput
              ref={inputRef}
              onChangeText={(value) => (textRef.current = value)}
              placeholder="Type message..."
              style={{ fontSize: hp(2) }}
              className="flex-1 mr-2 "
            />
            <View className="flex-row mr-[1px] ">
              {/* <Pressable
                onPress={handleSendFile}
                className="bg-neutral-200 p-2 mr-2  rounded-full "
              >
                <Ionicons name="attach" size={hp(2.7)} color="#737373" />
              </Pressable> */}
              <Pressable
                onPress={handleImagePicker}
                className="bg-neutral-200 p-2 mr-2  rounded-full "
              >
                <Feather name="image" size={hp(2.7)} color="#737373" />
              </Pressable>
              <Pressable
                onPress={handleSendMessage}
                className="bg-neutral-200 p-2 mr-[1px] rounded-full"
              >
                <Feather name="send" size={hp(2.7)} color="#737373" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatRoom;
