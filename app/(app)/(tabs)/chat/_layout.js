import React from "react";
import { Stack } from "expo-router";
import HomeHeader from "@/components/Chat/ChatHomeHeader";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <HomeHeader />,
        }}
      />
      <Stack.Screen name="ChatRoom" />
    </Stack>
  );
}
