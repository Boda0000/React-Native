import { StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  container: {
    alignItems: "center",
   
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#D0D4DD",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "transparent",
    borderWidth: 0,
    alignItems: "center",
    alignSelf: "center",
    marginTop: responsiveHeight(2),
  },

  buttonText: {
    color: "#414E75",
    fontWeight: "500",
    fontFamily: "Alexandria-Regular",
    textAlign: "center",
  },
});
