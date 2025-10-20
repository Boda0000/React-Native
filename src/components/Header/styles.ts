import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse", 
    alignItems: "center", 
    marginVertical: 50,
    gap: 90, 
  },

  img: {
    width: 41,
    height: 41,
    borderWidth: 1,
    borderColor: "#ECEFFF",
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#414E75", 
  },
});

export default styles;
