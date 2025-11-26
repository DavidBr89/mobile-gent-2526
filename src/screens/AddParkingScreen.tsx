import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useRef, useState } from "react";

import { useFormik } from "formik";
import MyTextInput from "../components/MyTextInput";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Naam is verplicht"),
  email: Yup.string().required().email(),
  places: Yup.number().required().max(20).min(0),
  isClosed: Yup.boolean().required(),
  type: Yup.string()
    .required()
    .oneOf(["ondergronds", "bovengronds", "overdekt"]),
});

const AddParkingScreen = () => {
  const [name, setName] = useState("");

  // FORMIK

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    errors,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      places: 10,
      type: "bovengronds",
      isClosed: true,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
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
          error={errors.name}
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
          error={errors.email}
        />

        <View className="flex gap-2">
          <Text>0</Text>
          <Slider
            minimumValue={0}
            maximumValue={20}
            minimumTrackTintColor="red"
            maximumTrackTintColor="yellow"
            step={5}
            value={values.places}
            onValueChange={(value) => {
              setFieldValue("places", value);
            }}
          />
          <Text>20</Text>
          <Text>{errors.places}</Text>
        </View>

        <Picker
          selectedValue={values.type}
          onValueChange={(value) => {
            setFieldValue("type", value);
          }}>
          <Picker.Item label="Ondergronds" value="ondergronds" />
          <Picker.Item label="Bovengronds" value="bovengronds" />
          <Picker.Item label="Overdekt" value="overdekt" />
        </Picker>
        <Text>{errors.type}</Text>

        <Switch
          value={values.isClosed}
          onValueChange={(value) => {
            setFieldValue("isClosed", value);
          }}
        />
        <Text>{errors.isClosed}</Text>

        <TouchableOpacity
          className="px-4 py-2 bg-purple-600  font-bold rounded-lg"
          onPress={() => {
            handleSubmit();
          }}>
          <Text className="text-center font-bold text-white">Verstuur</Text>
        </TouchableOpacity>
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
