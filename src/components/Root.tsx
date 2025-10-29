import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import App from "../../App";
import RootStackNavigator from "../navigators/RootStackNavigator";
import ParkingsTabNavigator from "../navigators/ParkingsTabNavigator";

const Root = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ParkingsTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Root;

const styles = StyleSheet.create({});
