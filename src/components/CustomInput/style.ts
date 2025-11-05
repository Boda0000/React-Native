import { StyleSheet, Dimensions, I18nManager } from "react-native";

const { width, height } = Dimensions.get("window");


export default StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: "black",
  },
   input: {
    flex: 1,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#000",
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    margin: 5,
  },
  inputContainer: {
    position: "relative",
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row", 
    alignItems: "center",
    
  },
  iconInside: {
    position: "absolute",
    right: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },


  // Custom placeholder style
  placeholderText: {
    position: "absolute",
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
