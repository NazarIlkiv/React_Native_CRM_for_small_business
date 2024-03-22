import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign, Feather } from "@expo/vector-icons";
import HomeHeader from "@/components/Home/HomeHeader";
import TasksList from "@/components/Home/TasksList";

const Home = () => {
  const handleAddTask = () => {
    console.log("Add Task");
  };

  return (
    <View className="flex-1 bg-white">
      <HomeHeader />
      <TasksList />
    </View>
  );
};

export default Home;
