import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import App from "../../App";
import ParkingsDetailScreen from "../screens/ParkingsDetailScreen";

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="home"
        component={App}
        options={{
          title: "Parkings",
        }}
      />
      <RootStack.Screen name="parkingDetail" component={ParkingsDetailScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
