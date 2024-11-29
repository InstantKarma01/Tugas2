import { StyleSheet } from "react-native";

export const repoStyles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  repoName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  repoDescription: {
    fontSize: 14,
    color: "gray",
    marginVertical: 4,
  },
  repoLanguage: {
    fontSize: 12,
    color: "darkgray",
  },
});
