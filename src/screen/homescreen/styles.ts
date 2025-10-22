import { StyleSheet, I18nManager } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const isRTL = I18nManager.isRTL;

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
  },
  pckName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#172554",
    textAlign: "right",
    marginBottom: 10,
  },

  pckDetails: {
    flexDirection: isRTL ? "row-reverse" : "row",
    paddingVertical: 8,
    textAlign: "right",
    justifyContent: "space-between",
    fontFamily: "Alexandria-Bold",
    
  },

  packagePrice: {
    marginTop: 8,
    fontWeight: "bold",
    color: "#414E75",
    alignItems: "center",
    backgroundColor: "#F8F9FF",
    padding: 3,
    borderRadius: 8,
    textAlign: "right",
  },
  taxincluded: {
    fontWeight: 400,
    color: "#484848",
    alignItems: "center",
    textAlign: "right",
    paddingBottom: 10,
  },

  Sessions: {
    flexDirection: "row",
    alignItems: "center",
    color: "#414E75",
  },
  Duration: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 5,
    color: "#414E75",
  },

  SessionTime: {
    flexDirection: "row",
    alignItems: "center",
    color: "#414E75",
  },
});
