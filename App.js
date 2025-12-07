import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import { Audio } from "expo-av";

export default function App() {
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [decibels, setDecibels] = useState(0);
  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRecording();
  }, []);

  useEffect(() => {
    // Animate color smoothly based on volume level
    Animated.timing(colorAnim, {
      toValue: volumeLevel,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [volumeLevel]);

  async function startRecording() {
    try {
      const { granted } = await Audio.requestPermissionsAsync();
      if (!granted) return alert("Microphone permission required");

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      await recording.startAsync();

      // Measure volume every 100ms
      setInterval(async () => {
        const status = await recording.getStatusAsync();
        if (status.metering !== undefined) {
          let v = Math.abs(status.metering);
          v = Math.min(1, v / 160); // scale 0-1
          setVolumeLevel(v);

          // Calculate decibels from the metering value
          const dB = v > 0 ? 20 * Math.log10(v) : -Infinity; // Handle log(0) case
          setDecibels(dB.toFixed(2)); // Set decibels, rounded to two decimal places
        }
      }, 100);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  // Interpolate RGB to create rainbow effect based on volume
  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
    outputRange: [
      "rgb(255,0,0)",    // Red
      "rgb(255,165,0)",  // Orange
      "rgb(255,255,0)",  // Yellow
      "rgb(0,128,0)",    // Green
      "rgb(0,0,255)",    // Blue
      "rgb(128,0,128)"   // Purple
    ],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          { backgroundColor } // Animated rainbow background
        ]}
      />
      {/* Display Decibels */}
      <Text style={styles.decibelsText}>
        Decibels: {decibels} dB
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 300,
    height: 200,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#fff",
  },
  decibelsText: {
    marginTop: 20,
    fontSize: 20,
    color: "#fff",
  },
});
