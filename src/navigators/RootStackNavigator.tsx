import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ParkingsDetailScreen from "../screens/ParkingsDetailScreen";
import ParkingsListScreen from "../screens/ParkingsListScreen";
import { RootStackNavProps, RootStackParamsList } from "./types";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddParkingScreen from "../screens/AddParkingScreen";
import { useNavigation } from "@react-navigation/native";

const RootStack = createStackNavigator<RootStackParamsList>();

const RootStackNavigator = () => {
  // const navigation =
  //   useNavigation<RootStackNavProps<"parkingList">["navigation"]>();

  return (
    <RootStack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#6c6dba",
        },
        headerTintColor: "white",
      })}>
      <RootStack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: "#165b0b",
          },
        }}>
        <RootStack.Screen
          name="parkingList"
          component={ParkingsListScreen}
          options={({ navigation }) => ({
            title: "Parkings",
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("addParking");
                  }}>
                  <MaterialCommunityIcons size={28} color="white" name="plus" />
                </TouchableOpacity>
              );
            },
          })}
        />
        <RootStack.Screen
          name="parkingDetail"
          component={ParkingsDetailScreen}
        />
      </RootStack.Group>
      <RootStack.Screen name="addParking" component={AddParkingScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
