import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import BlueText from "../components/BlueText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RootStackNavProps } from "../navigators/types";
import { useFavorites } from "../hooks/useFavorites";
import { useQuery } from "@tanstack/react-query";

import Axios from "axios";
import { add } from "../store/favorites/slice";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

interface AxiosResponse {
  total_count: number;
  results: Parking[];
}

const URL =
  "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records";

const ParkingsListScreen = () => {
  const [parkings, setParkings] = useState<Parking[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setParkings(data.results as Parking[]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const { data, error, isLoading, dataUpdatedAt } = useQuery({
    queryKey: ["fetchParkings"],
    queryFn: () => {
      return Axios.get<AxiosResponse>(URL);
    },
    initialData: {
      data: {
        total_count: 0,
        results: [],
      },
    },
  });

  const { top, bottom, left, right } = useSafeAreaInsets();

  // const navigation =
  //   useNavigation<RootStackNavProps<"parkingList">["navigation"]>();

  const navigation = useNavigation();

  // const { favorites, addFavorites } = useFavorites();

  const favorites = useAppSelector((store) => store.favorites);

  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text className="text-2xl font-bold text-black">{dataUpdatedAt}</Text>
      <FlatList
        data={data.data.results}
        renderItem={({ item }) => {
          const isInFavorites = favorites.some((f) => f.id === item.id);
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                navigation.navigate("parkingDetail", { data: item });
              }}
              onLongPress={() => {
                console.log("Lang geduwd op de knop");
              }}>
              <BlueText>{item.name}</BlueText>
              <TouchableOpacity
                onPress={() => {
                  // Context
                  // addFavorites(item);

                  // REDUX
                  dispatch(add(item));
                }}
                className={`${
                  isInFavorites
                    ? "bg-white border-2 border-amber-400 rounded-full"
                    : "bg-amber-400 rounded-full p-4"
                } `}>
                <MaterialCommunityIcons
                  name={`${isInFavorites ? "star" : "star-outline"}`}
                  size={32}
                  color={`${isInFavorites ? "#fbbf24" : "white"}`}
                />
              </TouchableOpacity>
              <MaterialCommunityIcons
                name="chevron-right"
                size={32}
                color="#c4c1c1"
              />
              {/* <Button
                title="Naar Detail"
                onPress={() => {
                  navigation.navigate("parkingDetail", { data: item });
                }}
              /> */}
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ParkingsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
  item: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 200,
    padding: 16,
  },
});
