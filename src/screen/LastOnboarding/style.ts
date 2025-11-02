import { StyleSheet, Dimensions, I18nManager } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: width * 0.85,
    height: height * 0.4,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: responsiveHeight(10),
  },
  title: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: "700",
    color: "#1E1E1E",
    textAlign: "right",
    marginTop: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(8),
    alignSelf: "flex-end",
    fontFamily: "Kalligraaf Arabic Bold",
  },

  subtitle: {
    fontSize: responsiveFontSize(1.8),
    color: "#777777",
    fontWeight: "400",
    textAlign: "right",
    lineHeight: responsiveHeight(2.8),
    marginTop: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(10),
    alignSelf: "flex-end",
    marginBottom: 30,
    fontFamily: "Kalligraaf Arabic",
  },
  startButton: {
    backgroundColor: "#315C63",
    borderRadius: 4,
    paddingVertical: responsiveHeight(1.8),
    width: "100%",
    alignSelf: "center",
    marginBottom: responsiveHeight(0.5),
    fontWeight: "500",
    fontFamily: "Kalligraaf Arabic",
  },
  startText: {
    fontSize: responsiveFontSize(2),
    color: "#FFFFFF",
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "Kalligraaf Arabic",
  },

  loginText: {
    textAlign: "center",
    color: "#000000",
    fontSize: responsiveFontSize(1.7),
    marginTop: 0,
    marginBottom: responsiveHeight(2),
    alignSelf: "center",
    fontFamily: "Kalligraaf Arabic",
  },

  loginLink: {
    color: "#0D3F47",
    fontWeight: "500",
  },
});
