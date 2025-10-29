import { StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 15,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 16,
    marginBottom: 10,
    backgroundColor: "#EAF3FF",
  },

  button: {
    backgroundColor: "#ECEFFF",
    borderWidth: 1,
    borderColor: "#E8ECF4",
    borderRadius: responsiveWidth(1),
    alignItems: "center",
    alignSelf: "center",
    marginTop: responsiveHeight(1),
  },

  buttonText: {
    color: "#414E75",
    fontWeight: "500",
    fontFamily: "Alexandria-Regular",
    textAlign: "center",
  },
});
