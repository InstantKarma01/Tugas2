import { SafeAreaView, StyleSheet } from "react-native";
import ProfileScreen from "./src/pages/profile";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ProfileScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
