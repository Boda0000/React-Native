import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: "black",
  },
  input: {
    width: width - 30,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    paddingVertical: 15,
    fontSize: 14,
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
  },
  iconInside: {
    position: "absolute",
    right: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
