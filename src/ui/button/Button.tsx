import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ButtonProps {
  text: string;
  handlePress: () => void;
  valid?: boolean;
  icon?: string;
  loading?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  text,
  handlePress,
  valid,
  icon,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={valid ? button_styles.button : button_styles.button_disabled}
      onPress={handlePress}
    >
      {loading ? (
        <ActivityIndicator animating={loading} color="#0000ff" />
      ) : (
        <View>
          {icon && (
            <View>
              <Image source={{ uri: icon }} />
            </View>
          )}

          <Text style={button_styles.button_text}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const button_styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7B59D4",
    borderRadius: 16,
    position: "relative",
  },
  button_disabled: {
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C4C6CD",
    borderRadius: 16,
  },
  button_block: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  button_text: {
    color: "white",
    fontFamily: "SF Pro Rounded_Bold",
    fontSize: 16,
    lineHeight: 20,
  },
});
