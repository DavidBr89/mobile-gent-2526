import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ParkingsDrawerParamsList } from "./types";
import ProfileScreen from "../screens/ProfileScreen";
import AboutScreen from "../screens/AboutScreen";

const Drawer = createDrawerNavigator<ParkingsDrawerParamsList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "red",
      }}>
      <Drawer.Screen
        options={{
          title: "Profiel",
        }}
        name="profile"
        component={ProfileScreen}
      />
      <Drawer.Screen name="about" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
