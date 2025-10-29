import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParkingsTabParamsList } from "./types";
import ParkingsMapScreen from "../screens/ParkingsMapScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ParkingsListScreen from "../screens/ParkingsListScreen";
import RootStackNavigator from "./RootStackNavigator";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const ParkingsTab = createBottomTabNavigator<ParkingsTabParamsList>();

const ParkingsTabNavigator = () => {
  return (
    <ParkingsTab.Navigator>
      <ParkingsTab.Screen
        name="home"
        component={RootStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <ParkingsTab.Screen name="map" component={ParkingsMapScreen} />
      <ParkingsTab.Screen name="settings" component={SettingsScreen} />
    </ParkingsTab.Navigator>
  );
};

export default ParkingsTabNavigator;
