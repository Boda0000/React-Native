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
  banner: {
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#2463EC",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    borderRadius: 12,
    paddingVertical: 50,
    marginBottom: 10,
  },
  bannerbtn: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    
    
  },

  bannerbtnText: {
    color: "#2562EB",
    fontSize: scale(18),
    fontWeight: "600",
  },

  bannerTxt: {
    color: "#FFFFFF",
    fontSize: scale(21),
    fontWeight: "300",
    maxWidth: "50%",
  },

  midsec: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  packages: {
    fontWeight: 500,
    fontSize: scale(24),
    paddingVertical: 20,
    marginBottom: 10,
  },
  all_packages: {
    fontWeight: 400,
    fontSize: scale(20),
    paddingVertical: 30,
  },

  Pkgcontainer: {
    backgroundColor: "#FFFFFF",
    marginBottom: 12,
    padding: 20,
    borderRadius: 12,
    borderColor: "#E8ECF4",
    borderWidth: 1,
    width: "100%",
  },
  PkgName: {
    fontWeight: "700",
    color: "#172554",
    textAlign: "right",
    marginBottom: 10,
    fontFamily: "Alexandria-Regular",
    fontSize: scale(16),
  },

  pkgDetails: {
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

  NoData: { fontSize: 18, color: "#777", fontWeight: "600" },

  ListEmpty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  Loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  LoadingText: { marginTop: 10, fontSize: 16, color: "#4A90E2" },
});
