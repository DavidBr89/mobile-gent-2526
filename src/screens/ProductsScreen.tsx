import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
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

  const handlePress = async () => {
    const newProduct: Omit<Product, "id"> = {
      name: "Web 2 - Video's",
      price: 250,
      isEnabled: true,
      // createdAt: serverTimestamp(),
    };

    const updateProduct: Partial<Product> = {
      name: "Web 2 lessen",
      // updatedAt: serverTimestamp(),
    };

    const docRef = doc(db, "products/web2videos");
    const collectionRef = collection(db, "products");

    try {
      // Document toevoegen met eigen unieke ID
      // await setDoc(docRef, newProduct);
      // Update met overschrijven van alle fields
      // await setDoc(docRef, updateProduct);
      // Update met het mergen van bestaande fields
      await setDoc(docRef, updateProduct, {
        merge: true,
      });

      await addDoc(collectionRef, newProduct);
    } catch (error) {
      console.log(error);
    }
  };

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

      <TouchableOpacity
        onPress={handlePress}
        className="px-4 py-2 bg-indigo-500">
        <Text>Nieuw product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductsScreen;
