import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { RootStackNavProps } from "../navigators/types";

import { WebView } from "react-native-webview";
import MyTextInput from "../components/MyTextInput";

const ParkingsDetailScreen = () => {
  const {
    params: { data },
  } = useRoute<RootStackNavProps<"parkingDetail">["route"]>();

  return (
    <View className="flex-1">
      {/* <MyTextInput   /> */}
      <WebView className="flex-1" source={{ uri: data.urllinkaddress }} />
    </View>
  );
};

export default ParkingsDetailScreen;

const styles = StyleSheet.create({});
