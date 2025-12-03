import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIyNAzbqMYfqURc3-ifdoCtsWy8yFgYzc",
  authDomain: "hogent-parkings2.firebaseapp.com",
  projectId: "hogent-parkings2",
  storageBucket: "hogent-parkings2.firebasestorage.app",
  messagingSenderId: "514535704158",
  appId: "1:514535704158:web:8c16bf0a6b1e2b20b496cf",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
