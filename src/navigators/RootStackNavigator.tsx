import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ParkingsDetailScreen from "../screens/ParkingsDetailScreen";
import ParkingsListScreen from "../screens/ParkingsListScreen";
import { RootStackParamsList } from "./types";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RootStack = createStackNavigator<RootStackParamsList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6c6dba",
        },
        headerTintColor: "white",
        headerRight: () => {
          return (
            <TouchableOpacity>
              <MaterialCommunityIcons size={28} color="white" name="plus" />
            </TouchableOpacity>
          );
        },
      }}>
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
