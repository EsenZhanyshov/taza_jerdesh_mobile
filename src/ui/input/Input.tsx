import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface InputProps {
  onChange: (value: string) => void;
  value: string;
  valid?: boolean;
  icon?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  valid,
  icon,
  placeholder,
}) => {
  return (
    <View>
      <TextInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const input_styles = StyleSheet.create({
  container: {},
  input: {},
  icon: {},
  icon_notvalid: {},
});
