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
  },
  title: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: "700",
    color: "#1E1E1E",
    textAlign: "right",
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
    marginTop: responsiveHeight(20),
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
  dropdownContainer: {
    backgroundColor: "#fff",
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(1),
    elevation: 5,
    overflow: "hidden",
  },

  dropdownItem: {
    paddingVertical: responsiveHeight(1.2),
    paddingHorizontal: responsiveWidth(2),
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "transparent",
  },

  dropdownText: {
    fontSize: 15,
    color: "#333",
    fontFamily: "Kalligraaf Arabic",
    fontWeight: 400,
  },
   langWrapper: {
    position: "absolute",
    top: responsiveHeight(8),
    left: responsiveWidth(6),
    zIndex: 20,
  },

  langButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    paddingVertical: responsiveHeight(0.8),
    paddingHorizontal: responsiveWidth(3.5),
    borderWidth: 1,
    borderColor: "#E1E1E1",
    alignSelf: "flex-start",
  },

  langText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "400",
    marginRight: 4,
    fontFamily: "Kalligraaf Arabic",
  },
});
