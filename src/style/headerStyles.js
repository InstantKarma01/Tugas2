import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  username: {
    fontSize: 16,
    color: "gray",
  },
  bio: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
    width: "100%",
  },
  statsItem: {
    alignItems: "center",
  },
  statsNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statsLabel: {
    fontSize: 12,
    color: "gray",
  },
});
