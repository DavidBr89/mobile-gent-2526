import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Test from "./src/components/Test";
import ParkingsListScreen from "./src/screens/ParkingsListScreen";
import BlueText from "./src/components/BlueText";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function App() {
  const { top, bottom, left, right } = useSafeAreaInsets();

  return (
    // TODO: Padding in styling toegepast
    <View style={styles.container}>
      <ParkingsListScreen />
      <View style={styles.secondView}>
        <Text>Second View</Text>
        <BlueText style={{ fontWeight: "800" }}>Subtitle</BlueText>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "blue",
    // paddingTop: 48,
    // padding: 8,
    // backgroundColor: "blue",
    // justifyContent: "center",
    // alignItems: "center",
  },
  secondView: {
    flex: 1,
    backgroundColor: "red",
  },
});
