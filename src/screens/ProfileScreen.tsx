import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { signOut } from "@firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, getDocs, query } from "firebase/firestore";

interface Product {
  id: string;
  name: string;
  price: number;
}

const ProfileScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const q = query(collection(db, "products"));
        const qs = await getDocs(q);

        setProducts(qs.docs.map((d) => ({ id: d.id, ...d.data() } as Product)));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View>
      <Text>ProfileScreen</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => {
          return <Text className="my-4 text-3xl">{item.name}</Text>;
        }}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        onPress={async () => {
          try {
            await signOut(auth);
          } catch (error) {
            console.log(error);
          }
        }}
        className="bg-blue-700 py-4 rounded-lg mb-4">
        <Text className="text-white text-center text-lg font-semibold">
          Uitloggen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
