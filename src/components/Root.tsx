import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import App from "../../App";
import RootStackNavigator from "../navigators/RootStackNavigator";
import ParkingsTabNavigator from "../navigators/ParkingsTabNavigator";
import FavoritesProvider from "../contexts/FavoritesContex";

const Root = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <FavoritesProvider>
          <ParkingsTabNavigator />
        </FavoritesProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Root;

const styles = StyleSheet.create({});
