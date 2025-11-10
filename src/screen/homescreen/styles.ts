import { StyleSheet } from "react-native";

import { Platform } from "react-native";

export default StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 15,
    paddingTop: Platform.OS === "android" ? 50 : 80,
  },
  card1: {
    backgroundColor: "#DCF1F3",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderColor: "#BEDBDE",
  },
  h1: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    color: "#009688",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "right",
  },
  orderNumber: {
    textAlign: "right",
    fontSize: 16,
    color: "#2d3436",
    marginTop: 2,
    fontWeight: 500,
  },
  h2: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  date: {
    color: "#7f8c8d",
    fontSize: 13,
  },

  statusText: {
    fontWeight: "600",
    fontSize: 13,
    borderWidth: 1,
    borderColor: "#289CA5",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});
