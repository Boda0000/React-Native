import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 15,
    paddingTop: Platform.OS === "android" ? 50 : 80,
  },

  card1: {
    backgroundColor: "#DCF1F3",
    borderRadius: 14,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderColor: "#BEDBDE",
    height: 100,

    // shadow (iOS)
    shadowColor: "#DCEBEC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,

    // shadow (Android)
    elevation: 3,
  },

  h1: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },

  h2: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  orderNumber: {
    textAlign: "right",
    fontSize: 16,
    color: "#385052",
    marginTop: 2,
    fontWeight: "500",
    fontFamily: "IBMPlexSansArabic-Medium",
    
  },

  priceContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },

  price: {
    color: "#289CA5",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "right",
    fontFamily: "IBM Plex Sans Arabic",
  },

  dateContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 4,
  },

  date: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "IBMPlexSansArabic-Medium",
    color: "#385052",
  },

  statusText: {
    fontWeight: "700",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#289CA5",
    borderRadius: 8,
    fontFamily: "IBMPlexSansArabic-Bold",
    backgroundColor: "#FFFFFF66",
    padding: 7,
  },
});
