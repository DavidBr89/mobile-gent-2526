import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Test from "./src/components/Test";
import ParkingsListScreen from "./src/screens/ParkingsListScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ParkingsListScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
