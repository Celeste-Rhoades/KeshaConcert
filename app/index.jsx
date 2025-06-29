import React, { useState } from "react";
import "./index.css";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Stack } from "expo-router";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false, // Hide the default header
        }}
      />
      <ImageBackground
        source={require("../assets/images/background.png")}
        className="flex-1"
        style={{ flex: 1, width: "100%", height: "100%" }}
        resizeMode="cover"
      >
        <View className="flex-1">
          <Text className="text-8xl font-extrabold text-center mt-24 text-[#e982d1]">
            Tits Out Tour
          </Text>
          <View className="flex-1 justify-center items-center">
            <Text className="text-6xl font-bold mb-10 text-white">{count}</Text>

            <TouchableOpacity
              className="bg-neutral-800 p-4 rounded-xl my-2 w-36 items-center"
              onPress={() => setCount(count + 2)}
            >
              <Text className="text-white text-xl">+2</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-neutral-800 p-4 rounded-xl my-2 w-36 items-center"
              onPress={() => setCount(count - 1)}
            >
              <Text className="text-white text-xl">-1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-neutral-800 p-4 rounded-xl my-2 w-36 items-center"
              onPress={() => setCount(count + 3)}
            >
              <Text className="text-white text-xl">+3</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-red-500 p-4 rounded-xl mt-8 w-36 items-center"
              onPress={() => setCount(0)}
            >
              <Text className="text-white text-xl">Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
