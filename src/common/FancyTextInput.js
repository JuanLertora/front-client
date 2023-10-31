import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    marginBottom: 5,
    color: "grey",
    fontSize: 14,
  },
  isBordered: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5, // Radio de borde
    paddingLeft: 10,
  },
});

const FancyTextInput = ({ isBordered, onChangeText, secureTextEntry, value, placeholder }) => {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const textStyles = [styles.text, isBordered && styles.isBordered];

  return (
    <TextInput
      style={textStyles}
      onChangeText={onChangeText}
      onFocus={handleFocus}
      secureTextEntry={secureTextEntry}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default FancyTextInput;
