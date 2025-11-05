import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContex";
import { useFavorites } from "../hooks/useFavorites";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/reduxHooks";

const FavoritesScreen = () => {
  // const { favorites } = useFavorites();

  const favorites = useAppSelector((store) => store.favorites);

  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
