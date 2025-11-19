import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const AddParkingScreen = () => {
  const [name, setName] = useState("");

  return (
    <View className="flex-1 p-4">
      <TextInput
        value={name}
        // onChange={(event) => {event.nativeEvent.text}}
        onChangeText={(text) => setName(text)}
        className="border border-purple-400 rounded-lg py-2 px-4"
      />
    </View>
  );
};

export default AddParkingScreen;

const styles = StyleSheet.create({});
