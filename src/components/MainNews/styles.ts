import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    borderRadius: 10,
    overflow: "hidden",
    width: 300,
    height: 250,
  },
  whiteCont: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 10,
    marginTop: 100,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  redcont: {
    backgroundColor: "red",
    borderRadius: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  galaxies: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
  },
  name: {
    fontSize: 15,
    marginTop: 10,
    color: "black",
  },
  listContainer: {
    marginTop: 20,
  },
});
