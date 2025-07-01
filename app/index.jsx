import React, { useState } from "react";
import "./index.css";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import "expo-router/entry";

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
        <View className="items-center mt-14 mb-4 relative">
          <Text
            className="text-[56px] font-extrabold text-center text-[#e982d1] uppercase"
            style={{
              textShadowColor: "#333333", // slate-800
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 1,
            }}
          >
            Tits Out
          </Text>
        </View>

        {/* +3 Button Center-Right */}
        <View className="absolute left-20 top-1/2 -translate-y-1/2 -mt-12 z-10">
          <TouchableOpacity
            className="relative items-center justify-center ml-3"
            onPress={() => {
              setCount(count + 3);
              Alert.alert(
                "🎉Congrats!🎉",
                "You Found The Elusive 3rd Nipple ( ๏ 人 ๏ )"
              );
            }}
          >
            <FontAwesome name="star" size={28} color="#e982d1" />
            <Text className="absolute text-xs font-bold text-white">+3</Text>
            {/* Or for even smaller: */}
            {/* <Text className="absolute text-[10px] font-bold text-white">+3</Text> */}
          </TouchableOpacity>
        </View>

        <View className="flex-1 justify-end items-center pb-10 w-full p-4">
          <Text className="text-6xl font-bold text-white mb-8 ">{count}</Text>
          <View className="flex-row justify-center items-end space-x-4 w-full px-4">
            {/* +2 Button */}
            <TouchableOpacity
              className="relative items-center justify-center "
              onPress={() => setCount(count + 2)}
            >
              <FontAwesome name="star" size={111} color="#e982d1" />
              <Text className="absolute text-xl font-bold text-white">
                {"+2 "}
              </Text>
            </TouchableOpacity>
            {/* -1 Button */}
            <TouchableOpacity
              className="relative items-center justify-center ml-4"
              onPress={() => {
                if (count > 0) setCount(count - 1);
              }}
            >
              <FontAwesome name="star" size={111} color="#e982d1" />
              <Text className="absolute text-xl font-bold text-white">-1</Text>
            </TouchableOpacity>
            {/* Reset Button */}
            <TouchableOpacity
              className="rounded-full items-center justify-center ml-4 "
              onPress={() => setCount(0)}
            >
              <FontAwesome name="star" size={111} color="#424042 " />
              <Text className="absolute text-xl font-bold text-white">
                {"Reset"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
