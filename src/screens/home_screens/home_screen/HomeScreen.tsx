import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={home_screen_styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const home_screen_styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
