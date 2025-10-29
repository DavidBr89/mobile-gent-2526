import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParkingsTabParamsList } from "./types";
import ParkingsMapScreen from "../screens/ParkingsMapScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ParkingsListScreen from "../screens/ParkingsListScreen";
import RootStackNavigator from "./RootStackNavigator";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import DrawerNavigator from "./DrawerNavigator";

const ParkingsTab = createBottomTabNavigator<ParkingsTabParamsList>();

const ParkingsTabNavigator = () => {
  return (
    <ParkingsTab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#6c6dba",
        },
        headerStyle: {
          backgroundColor: "#6c6dba",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#aaa",
      }}>
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
      <ParkingsTab.Group
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
        }}>
        <ParkingsTab.Screen
          name="map"
          component={ParkingsMapScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                color={color}
                size={size}
                name="map-marker"
              />
            ),
          }}
        />
        <ParkingsTab.Screen
          name="settings"
          component={DrawerNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons color={color} size={size} name="cog" />
            ),
          }}
        />
      </ParkingsTab.Group>
    </ParkingsTab.Navigator>
  );
};

export default ParkingsTabNavigator;
