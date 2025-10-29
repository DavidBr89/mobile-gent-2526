import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ParkingsDetailScreen from "../screens/ParkingsDetailScreen";
import ParkingsListScreen from "../screens/ParkingsListScreen";
import { RootStackParamsList } from "./types";

const RootStack = createStackNavigator<RootStackParamsList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="parkingList"
        component={ParkingsListScreen}
        options={{
          title: "Parkings",
        }}
      />
      <RootStack.Screen name="parkingDetail" component={ParkingsDetailScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
