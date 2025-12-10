import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

const ProductsScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let unsubscribe: Unsubscribe;
    const fetchProducts = async () => {
      try {
        const q = query(
          //   collection(db, "products/mg19vusAmMZy0zyswqGa/reviews"),
          collection(db, "products"),
          where("price", ">", 50),
          where("isEnabled", "==", true),
          orderBy("name", "asc")
        );

        unsubscribe = onSnapshot(q, (qs) => {
          const docs = qs.docs.map(
            (ds) => ({ id: ds.id, ...ds.data() } as Product)
          );

          setProducts(docs);
        });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
    return () => {
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    return (
      <View className="bg-white flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1">
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductsScreen;
