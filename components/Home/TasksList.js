import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign, Feather } from "@expo/vector-icons";

const TasksList = () => {
  const handleAddTask = () => {
    console.log("Add Task");
  };

  return (
    <View className="items-center">
      <View
        style={{
          paddingVertical: 25,
          height: hp(20),
          width: wp(90),
          backgroundColor: "#F8F8F8",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            height: hp(5),
            backgroundColor: "#24A19C",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
        >
          <Feather name="flag" color="white" size={14} />
          <Text
            style={{
              color: "white",
              fontSize: hp(2),
              fontWeight: 500,
              marginLeft: 5,
            }}
          >
            Priority task 1
          </Text>
        </View>
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: 15,
            }}
            className="border-b border-b-neutral-200"
          >
            <Feather name="disc" color="#24A19C" size={20} />
            <Text style={{ fontSize: hp(2.2), marginLeft: 5, fontWeight: 500 }}>
              Fix bag
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 12,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="clockcircleo" color="red" size={14} />
            <Text style={{ fontSize: hp(2), color: "red", marginLeft: 5 }}>
              08.30 PM
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: hp(1.8) }}>Mon, 19 Jul 2022 </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: hp(5),
          width: wp(90),
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={handleAddTask}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 48,
            width: 48,
            backgroundColor: "#24A19C",
            borderRadius: 9999,
          }}
        >
          <AntDesign name="plus" color="white" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TasksList;
