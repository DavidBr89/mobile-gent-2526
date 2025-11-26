import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useRef, useState } from "react";

import { useFormik } from "formik";
import MyTextInput from "../components/MyTextInput";

const AddParkingScreen = () => {
  const [name, setName] = useState("");

  // FORMIK

  const { values, handleChange, handleBlur } = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {},
  });

  const emailTxtRef = useRef<TextInput>(null);

  return (
    // <View style={styles.container} className="flex-1 p-4">
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={150}>
      <ScrollView
        className="flex-1 p-4 gap-2"
        keyboardShouldPersistTaps="handled"
        contentContainerClassName="gap-4">
        <MyTextInput
          keyboardAppearance="dark"
          keyboardType="default"
          autoComplete="name-family"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Naam"
          // selectionColor="yellow"
          returnKeyType="next"
          value={values.name}
          secureTextEntry
          // onChange={(event) => {event.nativeEvent.text}}
          onChangeText={handleChange("name")}
          onBlur={handleBlur("name")}
          onSubmitEditing={() => {
            emailTxtRef.current?.focus();
          }}
          submitBehavior="submit"
        />
        <MyTextInput
          ref={emailTxtRef}
          keyboardAppearance="dark"
          keyboardType="email-address"
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          selectionColor="yellow"
          returnKeyType="next"
          value={values.email}
          secureTextEntry
          // onChange={(event) => {event.nativeEvent.text}}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddParkingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.select({
      ios: "red",
      android: "blue",
    }),
  },
});
