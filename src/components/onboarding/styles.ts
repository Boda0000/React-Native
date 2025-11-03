import { StyleSheet, Dimensions, I18nManager } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

  slide: {
    width,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  image: {
    width: width * 0.85,
    height: height * 0.4,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: responsiveHeight(2),
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

  dotsContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: responsiveWidth(10),
  },

dot: {
  width: responsiveWidth(3.5),
  height: responsiveHeight(0.6),
  borderRadius: responsiveWidth(6), 
  backgroundColor: "#B0BEC5",
  marginHorizontal: responsiveWidth(1),
  opacity: 0.5,
},

activeDot: {
  width: responsiveWidth(7), 
  height: responsiveHeight(0.6),
  borderRadius: responsiveWidth(6),
  backgroundColor: "#0D3F47",
  opacity: 1,
},

  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(8),
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(8),
  },

  arrowButton: {
    backgroundColor: "#0D3F47",
    paddingVertical: 9,
    paddingLeft: 13,
    paddingRight:7,
    borderRadius: 3,
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",
  },

  skipButton: {
    backgroundColor: "transparent",
  },

  skipText: {
    color: "#0D3F47",
    fontSize: 21,
    fontWeight: "400",
    textDecorationLine: "underline",
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
  bottomSectionWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveHeight(10),
  },

  mainButton: {
    backgroundColor: "#315C63",
    borderRadius: 4,
    paddingVertical: responsiveHeight(1.8),
    width: "100%",
    alignSelf: "center",
    marginBottom: responsiveHeight(0.5),
    fontWeight: "500",
    fontFamily: "Kalligraaf Arabic",
  },

  textStyle: {
    fontSize: responsiveFontSize(2),
    color: "#FFFFFF",
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "Kalligraaf Arabic",
  },

 

});

export default styles;
