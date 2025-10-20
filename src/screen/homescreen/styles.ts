import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  card: {
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#2463EC",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    borderRadius: 12,
    paddingVertical: 50,
    marginBottom: 10,
  },
  buttoncard: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  buttonTextcard: {
    color: "#2562EB",
    fontSize: 18,
    fontWeight: "600",
  },

  textcard: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "500",
    maxWidth: "50%",
  },

  middlesec: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  text1: {
    fontWeight: 500,
    fontSize: 24,
    paddingVertical: 20,
    marginBottom: 10,
  },
  text2: {
    fontWeight: 400,
    fontSize: 20,
    paddingVertical: 30,
  },

  pckcont: {
    backgroundColor: "#FFFFFF",
    marginBottom: 12,
    padding: 20,
    borderRadius: 12,
    borderColor: "#E8ECF4",
    borderWidth: 1,
    width: "100%",
    textAlign: "right",
  },
  pckName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#172554",
    textAlign: "left",
    marginBottom: 10,
  },
  pckdes: {
    color: "#666",
    marginTop: 6,
  },
  packagePrice: {
    marginTop: 8,
    fontWeight: "bold",
    color: "#333",
    
  },
});
