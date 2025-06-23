import React, { useState } from "react";
import styles from "../constants/styles";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Stack } from "expo-router";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
    >
      <Stack.Screen options={{ title: "Counter App" }} />
      <View style={styles.container}>
        <Text style={styles.counter}>{count}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 2)}
        >
          <Text style={styles.buttonText}>+2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 3)}
        >
          <Text style={styles.buttonText}>+3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
