import { StyleSheet, I18nManager } from "react-native";
import { Dimensions } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");
const guidelineBaseWidth = 375;
const scale = (size: number) => (width / guidelineBaseWidth) * size;

const isRTL = I18nManager.isRTL;
const CARD_PADDING_H = responsiveWidth(2);

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
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
    backgroundColor: "#FFFFFF",
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
  /////////////////////////////////////////////
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

  book_monthly_package: {
    fontFamily: "Alexandria-Regular",
    fontWeight: 500,
    fontSize: 12,
  },
  /////////////////////////////////////////////////////////////////////////////

  lowsec: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  instructors: {
    fontWeight: 500,
    fontSize: scale(16),
    paddingVertical: 20,
    marginBottom: 10,
    fontFamily: "Alexandria-Medium",
  },
  all_instructors: {
    fontWeight: 400,
    fontSize: scale(12),
    paddingVertical: 30,
    fontFamily: "Alexandria-Medium",
  },

  /////////////////////////////////////////////////////////////////

  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    margin: 6,
    borderWidth: 1,
    borderColor: "#ECEFFF",
    elevation: 2,
    width: responsiveWidth(47),
    height: responsiveHeight(26),
    justifyContent: "space-between",
    paddingHorizontal: CARD_PADDING_H,
    paddingTop: 0,
    paddingBottom: responsiveHeight(1.5),
    overflow: "hidden",
  },

  topSection: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderColor: "#ECEFFF",
    backgroundColor: "#FBFCFF",
    marginHorizontal: -CARD_PADDING_H,
    paddingHorizontal: CARD_PADDING_H,
    paddingVertical: responsiveHeight(1),
    gap: responsiveWidth(2),
  },

  teacherImage: {
    width: responsiveWidth(10),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(6),
  },

  teacherName: {
    color: "#1E1E1E",
    fontSize: responsiveFontSize(1.7),
    fontWeight: "500",
    fontFamily: "Alexandria-Medium",
    textAlign: "right",
    marginBottom: responsiveHeight(0.3),
  },

  ratingRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 4,
  },

  ratingText: {
    fontSize: 12,
    color: "#414E75",
    fontFamily: "Alexandria",
    fontWeight: "500",
  },
  // Subjects
  subjectContainer: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    paddingVertical: 1,
  },

  subjectBadge: {
    backgroundColor: "#F8F9FF",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(0.4),
    marginHorizontal: responsiveWidth(0.8),
    marginVertical: responsiveHeight(0.4),
  },

  subjectText: {
    fontSize: responsiveFontSize(1.5),
    color: "#414E75",
    fontWeight: "600",
    fontFamily: "Alexandria",
  },

  // Info Section
  infoRow: {
    flexDirection: "column",
    alignItems: "flex-end",
  },

  location: {
    fontSize: responsiveFontSize(1.5),
    color: "#414E75",
    fontFamily: "Alexandria",
  },

  // Button
  bookBtn: {
    backgroundColor: "#ECEFFF",
    borderWidth: 1,
    borderColor: "#E8ECF4",
    borderRadius: responsiveWidth(1),
    paddingVertical: responsiveHeight(0.8),
    alignItems: "center",
    alignSelf: "stretch",
    marginTop: responsiveHeight(1),
  },

  bookBtnText: {
    color: "#414E75",
    fontWeight: "500",
    fontFamily: "Alexandria-Regular",
    fontSize: responsiveFontSize(1.6),
    textAlign: "center",
  },
});
