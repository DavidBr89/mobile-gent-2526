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

  const { top, bottom, left, right } = useSafeAreaInsets();

  // const navigation =
  //   useNavigation<RootStackNavProps<"parkingList">["navigation"]>();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={parkings}
        renderItem={({ item }) => {
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
