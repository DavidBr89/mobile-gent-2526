import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import Axios from "axios";

import MapView, { Marker } from "react-native-maps";
import { useQuery } from "@tanstack/react-query";

import {
  useBackgroundPermissions,
  useForegroundPermissions,
} from "expo-location";

interface AxiosResponse {
  total_count: number;
  results: Parking[];
}

const ParkingsMapScreen = () => {
  const URL =
    "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records";

  const { data } = useQuery({
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

  const [status, requestPermission] = useForegroundPermissions();
  const [backStatus, requestBackPermission] = useBackgroundPermissions();

  useEffect(() => {
    if (status?.canAskAgain) {
      requestPermission();
    }
  }, [status?.canAskAgain]);

  useEffect(() => {
    if (backStatus?.canAskAgain) {
      requestBackPermission();
    }
  }, [backStatus?.canAskAgain]);

  const mapRef = useRef<MapView>(null);

  return (
    <View className="flex-1">
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        provider="google"
        mapType="terrain"
        showsUserLocation
        camera={{
          center: {
            latitude: 51.05,
            longitude: 3.7304,
          },
          heading: 0,
          pitch: 0,
          zoom: 12,
        }}
        // region={{
        //   latitude: 51.05,
        //   longitude: 3.7304,
        //   latitudeDelta: 0.56,
        //   longitudeDelta: 0.05,
        // }}
      >
        {data.data.results.map((p) => (
          <Marker
            key={p.id}
            coordinate={{
              latitude: p.location.lat,
              longitude: p.location.lon,
            }}
            title={p.name}
            description={p.availablecapacity.toString()}
            // pinColor=""
          />
        ))}
      </MapView>
      <Button
        title="Navigeer"
        onPress={() => {
          mapRef.current?.animateCamera({
            center: {
              latitude: 50.8477,
              longitude: 4.3572,
            },
          });
        }}></Button>
    </View>
  );
};

export default ParkingsMapScreen;

const styles = StyleSheet.create({});
