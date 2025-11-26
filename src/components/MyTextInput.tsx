import { StyleSheet, TextInput, TextInputProps } from "react-native";
import React, { Ref } from "react";

const MyTextInput = (props: TextInputProps & { ref?: Ref<TextInput> }) => {
  return (
    <TextInput
      className="border h-24 border-purple-400 rounded-lg py-2 px-4"
      {...props}
    />
  );
};

export default MyTextInput;

const styles = StyleSheet.create({});
