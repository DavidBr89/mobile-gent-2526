import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import BlueText from "../components/BlueText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const URL =
  "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records";

interface Parking {
  id: string;
  name: string;
  totalcapacity: number;
  availablecapacity: number;
}

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

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={parkings}
        renderItem={({ item }) => {
          return (
            <>
              <BlueText style={{ height: 200, padding: 16 }}>
                {item.name}
              </BlueText>
              <Button
                title="Naar Detail"
                onPress={() => {
                  navigation.navigate("parkingDetail", { data: item });
                }}
              />
            </>
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
});
