import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet, Text } from "react-native";
import HomeScreen from "../../screens/home_screens/home_screen/HomeScreen";
import MyAdsScreen from "../../screens/myads_screens/myads_screen/MyAdsScreen";
import AuthScreen from "../../screens/auth_screens/auth_screen/AuthScreen";

const AppNavigation = () => {
  // const [isConnected, setIsConnected] = React.useState<any>(null);

  // React.useEffect(() => {
  // 	const unsubscribe = NetInfo.addEventListener(state => {
  // 		setIsConnected(state.isConnected);
  // 	});

  // 	return () => {
  // 		unsubscribe();
  // 	};
  // }, []);

  const Tab = createBottomTabNavigator();

  const home_icon = require("../../assets/icons/home_icon.png");
  const home_active_icon = require("../../assets/icons/home_active_icon.png");
  const profile_icon = require("../../assets/icons/profile_icon.png");
  const profile_active_icon = require("../../assets/icons/profile_active_icon.png");
  const my_ads_icon = require("../../assets/icons/my_ads_icon.png");
  const my_ads_active_icon = require("../../assets/icons/my_ads_active_icon.png");

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            width: "100%",
            height: 55,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "gray",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                style={{ marginTop: 10 }}
                source={focused ? home_active_icon : home_icon}
              />
            ),
            title: "Главная",
            tabBarLabel: ({ focused }) => (
              <Text
                style={
                  focused
                    ? app_navigation_style.name_active
                    : app_navigation_style.name
                }
              >
                Главная
              </Text>
            ),
          })}
        />
        <Tab.Screen
          name="Ads"
          component={MyAdsScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "Мои объявления",
            tabBarIcon: ({ focused }) => (
              <Image
                style={{ marginTop: 10 }}
                source={focused ? my_ads_active_icon : my_ads_icon}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={
                  focused
                    ? app_navigation_style.name_active
                    : app_navigation_style.name
                }
              >
                Мои объявления
              </Text>
            ),
          })}
        />
        <Tab.Screen
          name="Auth"
          component={AuthScreen}
          options={({ navigation }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                style={{ marginTop: 10 }}
                source={focused ? profile_active_icon : profile_icon}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={
                  focused
                    ? app_navigation_style.name_active
                    : app_navigation_style.name
                }
              >
                Профиль
              </Text>
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const app_navigation_style = StyleSheet.create({
  container: { width: "100%" },
  name: {
    color: "#A3A5AE",
    fontSize: 12,
    fontFamily: "SF Pro Rounded_Semibold",
  },
  name_active: {
    color: "#7B59D4",
    fontSize: 12,
    fontFamily: "SF Pro Rounded_Semibold",
  },
});

export default AppNavigation;
