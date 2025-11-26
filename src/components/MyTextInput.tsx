import { StyleSheet, TextInput, TextInputProps, Text } from "react-native";
import React, { Ref } from "react";

const MyTextInput = (
  props: TextInputProps & { ref?: Ref<TextInput>; error: string | undefined }
) => {
  return (
    <>
      <TextInput
        className="border h-24 border-purple-400 rounded-lg py-2 px-4"
        {...props}
      />
      <Text>{props.error}</Text>
    </>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({});
