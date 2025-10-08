import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

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

  return (
    <View>
      <FlatList
        data={parkings}
        renderItem={({ item }) => {
          return <Text style={{ height: 200 }}>{item.name}</Text>;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ParkingsListScreen;

const styles = StyleSheet.create({});
