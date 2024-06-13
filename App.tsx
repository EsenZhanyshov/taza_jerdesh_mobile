import React from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import AppNavigation from "./src/navigations/app_navigations/AppNavigations";

const App = () => {
  const [fontsLoaded] = useFonts({
    "SF Pro Rounded_Bold": require("./src/assets/fonts/SF-Pro-Rounded-Bold.otf"),
    "SF Pro Rounded_Heavy": require("./src/assets/fonts/SF-Pro-Rounded-Heavy.otf"),
    "SF Pro Rounded_Light": require("./src/assets/fonts/SF-Pro-Rounded-Light.otf"),
    "SF Pro Rounded_Medium": require("./src/assets/fonts/SF-Pro-Rounded-Medium.otf"),
    "SF Pro Rounded_Regular": require("./src/assets/fonts/SF-Pro-Rounded-Regular.otf"),
    "SF Pro Rounded_Semibold": require("./src/assets/fonts/SF-Pro-Rounded-Semibold.otf"),
    "SF Pro Rounded_Thin": require("./src/assets/fonts/SF-Pro-Rounded-Thin.otf"),
    "SF Pro Rounded_Ultralight": require("./src/assets/fonts/SF-Pro-Rounded-Ultralight.otf"),
  });

  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
