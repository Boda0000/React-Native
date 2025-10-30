import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  slide: { width, alignItems: "center", justifyContent: "center", padding: 20 },
  image: { width: width * 0.8, height: 300, resizeMode: "contain" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E1E1E",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#414E75",
    textAlign: "center",
    marginTop: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  dot: { height: 10, borderRadius: 5, marginHorizontal: 5 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  skipText: { fontSize: 18, color: "#2562EB" },
  nextButton: { backgroundColor: "#2562EB", padding: 15, borderRadius: 10 },
});
