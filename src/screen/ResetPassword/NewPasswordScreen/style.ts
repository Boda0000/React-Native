import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: width * 0.06, 
    paddingTop: height * 0.08, 
  },

 header: {
  flexDirection: "row-reverse", 
  alignItems: "center",
  justifyContent: "center", 
  marginBottom: height * 0.05,
  position: "relative",
},

backIcon: {
  width: 32,
  height: 32,
  borderWidth: 1,
  backgroundColor: "#F5F5F5",
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
  borderColor: "#F5F5F5",
  position: "absolute",
  right: 0, 
},

headerTitle: {
  fontSize: 26,
  fontWeight: "500",
  color: "#1E1E1E",
  textAlign: "center",
  fontFamily: "Kalligraaf Arabic Medium",
},

  icon: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 25,
    tintColor: "#E1F2EE",
    borderRadius: 30,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    color: "#777777",
    marginBottom: 20,
    lineHeight: 18 * 1.36,
    fontFamily: "Kalligraaf Arabic",
    fontWeight: "400",
  },
  nextButton: {
    marginTop: 10,
    backgroundColor: "#315C63",
    width: "100%",
    borderRadius: 4,
    height: 48,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    fontFamily: "Kalligraaf Arabic Medium",
  },
  labelStyle: {
    fontSize: 16,
    color: "#0D3F47",
    marginBottom: 4,
    textAlign: "right",
    fontFamily: "Kalligraaf Arabic",
    fontWeight: "400",
  },
  placeholderStyle: {
    color: "#CACACA",
    fontSize: 16,
    fontFamily: "Kalligraaf Arabic",
    textAlign: "right",
    fontWeight: "400",
  },
});

export default styles;
