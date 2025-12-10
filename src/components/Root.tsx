import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
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
import AuthStackNavigator from "../navigators/AuthStackNavigator";
import { onAuthStateChanged, User } from "@firebase/auth";
import { auth } from "../config/firebase";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

const Root = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const [fontLoaded] = useFonts({
    Bitcount: require("../../assets/fonts/Bitcount.ttf"),
  });

  useEffect(() => {
    setIsAuthLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedInUser(user);
      setIsAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!isAuthLoading && fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isAuthLoading, fontLoaded]);

  if (isAuthLoading && !fontLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <QueryClientProvider client={queryClient}>
              <FavoritesProvider>
                {loggedInUser !== null ? (
                  <ParkingsTabNavigator />
                ) : (
                  <AuthStackNavigator />
                )}
                {/* <AuthStackNavigator /> */}
                {/* <ParkingsTabNavigator /> */}
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
