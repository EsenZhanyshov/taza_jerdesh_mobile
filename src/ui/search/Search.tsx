import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  cancel: () => void;
  icon: string;
}

const Search: React.FC<SearchProps> = ({ value, onChange, cancel, icon }) => {
  return (
    <View style={search_styles.container}>
      <TextInput
        style={search_styles.input}
        placeholder="Поиск"
        onChangeText={onChange}
        value={value}
      />
      <Image style={search_styles.icon} source={{ uri: icon }} />
      <Pressable onPress={cancel} style={search_styles.cancel}>
        <Text style={search_styles.cancel_text}>Отменить</Text>
      </Pressable>
    </View>
  );
};

export default Search;

const search_styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    borderRadius: 12,
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: "#F0F1F3",
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  input: {
    height: 52,
    backgroundColor: "white",
    borderRadius: 12,
    paddingLeft: 50,
    fontFamily: "SF Pro Rounded_Semibold",
    fontSize: 16,
    lineHeight: 20,
    color: "#090A0B",
  },
  icon: {
    position: "absolute",
    top: 14,
    left: 26,
  },
  cancel: {},
  cancel_text: {},
});
