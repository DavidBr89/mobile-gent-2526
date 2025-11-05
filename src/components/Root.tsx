import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import App from "../../App";
import RootStackNavigator from "../navigators/RootStackNavigator";
import ParkingsTabNavigator from "../navigators/ParkingsTabNavigator";
import FavoritesProvider from "../contexts/FavoritesContex";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

const Root = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <QueryClientProvider client={queryClient}>
              <FavoritesProvider>
                <ParkingsTabNavigator />
              </FavoritesProvider>
            </QueryClientProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default Root;

const styles = StyleSheet.create({});
