import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: "black",
  },

  inputContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    borderRadius: 4,
    paddingVertical: 9,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },

  input: {
    flex: 1,
    marginVertical: 8,
    fontSize: 14,
    color: "#000",
  },

  leftIconContainer: {
    marginHorizontal: 6,
    justifyContent: "center",
  },

  rightIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },

  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    textAlign: "left",
  },

  placeholderText: {
    top: 15,
    fontSize: 14,
    color: "#000",
    fontFamily: "KalligraafArabic",
  },

  responsiveLabel: {
    fontSize: width * 0.04,
    marginBottom: height * 0.005,
  },
  responsiveInput: {
    width: width - 30,
    fontSize: width * 0.035,
    paddingVertical: height * 0.015,
  },
  responsiveErrorText: {
    fontSize: width * 0.032,
    marginTop: height * 0.005,
  },
  responsiveIconInside: {
    right: width * 0.03,
  },
});
