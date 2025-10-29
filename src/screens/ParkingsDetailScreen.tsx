import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { RootStackNavProps } from "../navigators/types";

const ParkingsDetailScreen = () => {
  const {
    params: { data },
  } = useRoute<RootStackNavProps<"parkingDetail">["route"]>();

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default ParkingsDetailScreen;

const styles = StyleSheet.create({});
