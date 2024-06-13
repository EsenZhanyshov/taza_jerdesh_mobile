import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const NotificationsScreen = () => {
  const notification_icon = require("../../assets/icons/notification_img.png");
  return (
    <View style={stylesNotification.container}>
      <View style={stylesNotification.content}>
        <View style={stylesNotification.content_item}>
          <View style={stylesNotification.image_block}>
            <Image source={notification_icon} />
          </View>

          <View style={stylesNotification.text_block}>
            <Text style={stylesNotification.text_data}>2023/12/11</Text>
            <Text style={stylesNotification.text_title}>
              Не упустите акцию!
            </Text>
          </View>
          <View style={stylesNotification.status_active}></View>
        </View>
        <View style={stylesNotification.content_item}>
          <View style={stylesNotification.image_block}>
            <Image source={notification_icon} />
          </View>

          <View style={stylesNotification.text_block}>
            <Text style={stylesNotification.text_data}>2023/12/11</Text>
            <Text style={stylesNotification.text_title}>
              Не упустите акцию!
            </Text>
          </View>
          <View style={stylesNotification.status_active}></View>
        </View>
      </View>
    </View>
  );
};

export default NotificationsScreen;

const stylesNotification = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  content: {
    width: "100%",
    padding: 24,
  },
  content_item: {
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    position: "relative",
  },
  image_block: {
    width: 60,
    height: 60,
    borderRadius: 67,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginBottom: 17,
  },
  text_block: {},
  text_data: {
    color: "#626576",
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 8,
    fontFamily: "SF Pro Rounded_Medium",
  },
  text_title: {
    fontSize: 14,
    lineHeight: 18,
    color: "#090A0B",
    fontFamily: "SF Pro Rounded_Semibold",
  },
  status_disabled: {},
  status_active: {
    width: 12,
    height: 12,
    borderRadius: 6,
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "#EA4A40",
  },
});
