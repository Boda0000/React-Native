import { StyleSheet, I18nManager } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const guidelineBaseWidth = 375;
const scale = (size: number) => (width / guidelineBaseWidth) * size;

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
    fontSize: scale(18),
    fontWeight: "600",
  },

  textcard: {
    color: "#FFFFFF",
    fontSize: scale(21),
    fontWeight: "300",
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
    fontSize: scale(24),
    paddingVertical: 20,
    marginBottom: 10,
  },
  text2: {
    fontWeight: 400,
    fontSize: scale(20),
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
    fontWeight: "700",
    color: "#172554",
    textAlign: "right",
    marginBottom: 10,
    fontFamily: "Alexandria-Regular",
    fontSize: scale(16),
  },

  pckDetails: {
    flexDirection: isRTL ? "row-reverse" : "row",
    
    paddingVertical: 8,
    textAlign: "right",
    justifyContent: "space-between",
  },

  packagePrice: {
    marginTop: 8,
    fontWeight: "600",
    color: "#414E75",
    alignItems: "center",
    backgroundColor: "#F8F9FF",
    padding: 3,
    borderRadius: 8,
    textAlign: "right",
    fontFamily: "Alexandria-Regular",
    fontSize: scale(12),
  },
  taxincluded: {
    fontWeight: 400,
    color: "#484848",
    alignItems: "center",
    textAlign: "right",
    paddingBottom: 10,
    fontFamily: "Alexandria-Regular",
    fontSize: scale(10),
  },

  Sessions: {
    flexDirection: "row",
    alignItems: "center",
  },

  SessionsText: {
    color: "#414E75",
    fontFamily: "Alexandria-Regular",
    fontSize: scale(12),
    fontWeight: "400",
  },
  Duration: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },

  DurationText: {
    color: "#414E75",
    fontFamily: "Alexandria-Regular",
    fontSize: scale(12),
    fontWeight: "400",
  },

  SessionTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  SessionTimeText: {
    color: "#414E75",
    fontFamily: "Alexandria-Regular",
    fontSize: scale(12),
  },
});
