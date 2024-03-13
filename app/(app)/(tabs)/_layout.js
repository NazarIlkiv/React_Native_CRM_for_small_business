import { View, Image } from "react-native";
import React from "react";
import icons from "../../../utils/images";

import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 72,
          elevation: 0,
          backgroundColor: "#FAFAFC",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 16,
                  borderTopColor: focused ? "rgb(129 140 248)" : "#FAFAFC",
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? icons.homeIcon : icons.homeIcon}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? "rgb(129 140 248)" : "black",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 16,
                  borderTopColor: focused ? "rgb(129 140 248)" : "#FAFAFC",
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? icons.tasksIcon : icons.tasksIcon}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? "rgb(129 140 248)" : "black",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 16,
                  borderTopColor: focused ? "rgb(129 140 248)" : "#FAFAFC",
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? icons.chatIcon : icons.chatIcon}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? "rgb(129 140 248)" : "black",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 16,
                  borderTopColor: focused ? "rgb(129 140 248)" : "#FAFAFC",
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? icons.settingsIcon : icons.settingsIcon}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? "rgb(129 140 248)" : "black",
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
