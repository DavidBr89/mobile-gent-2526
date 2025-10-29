import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContex";
import { useFavorites } from "../hooks/useFavorites";

const FavoritesScreen = () => {
  const { favorites } = useFavorites();

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
