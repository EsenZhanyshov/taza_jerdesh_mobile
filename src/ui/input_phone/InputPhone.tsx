import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PhoneInput, { ICountry } from "react-native-international-phone-number";

interface InputPhoneProps {
  inputValue: string;
  handleChangeInputValue: (text: string) => void;
  selectedCountry: ICountry;
  handleSelectedCountry: (country: ICountry) => void;
  defaultValue: string;
}

const InputPhone: React.FC<InputPhoneProps> = ({
  inputValue,
  handleChangeInputValue,
  selectedCountry,
  handleSelectedCountry,
  defaultValue,
}) => {
  return (
    <View style={phone_input_styles.form}>
      <Text style={phone_input_styles.formText}>Номер телефона</Text>
      <View style={phone_input_styles.block}>
        <PhoneInput
          defaultValue={defaultValue}
          value={inputValue}
          onChangePhoneNumber={handleChangeInputValue}
          selectedCountry={selectedCountry}
          onChangeSelectedCountry={handleSelectedCountry}
          language={"ru"}
          defaultCountry={"RU"}
          showOnly={["RU", "KG"]}
          selectionColor="#F5F6F7"
          placeholder=""
          phoneInputStyles={phone_input_styles}
        />
      </View>
    </View>
  );
};

export default InputPhone;

const phone_input_styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: "#F3F3F3",
  },
  flagContainer: {
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    backgroundColor: "white",
    justifyContent: "center",
  },
  caret: {
    color: "#626576",
    fontSize: 16,
  },
  divider: {
    backgroundColor: "#626576",
  },
  callingCode: {
    fontSize: 16,
    fontFamily: "SF Pro Rounded_Regular",
    color: "#626576",
  },
  input: {
    color: "#626576",
    fontFamily: "SF Pro Rounded_Regular",
  },

  form: {
    width: "100%",
    marginBottom: 30,
  },
  formText: {
    fontFamily: "SF Pro Rounded_Regular",
    fontSize: 16,
    lineHeight: 20,
    color: "#090A0B",
    marginBottom: 10,
  },
  block: {
    width: "100%",
    flex: 1,
    padding: 0,
    marginBottom: 40,
  },
});
