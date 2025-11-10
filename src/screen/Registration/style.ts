import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingTop: height * 0.07,
  },
  header: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: height * 0.03,
    position: "relative",
    gap: 110,
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
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "500",
    color: "#1E1E1E",
    alignItems: "center",
    fontFamily: "Kalligraaf Arabic Medium",
  },

  nextButton: {
    marginTop: 20,
    backgroundColor: "#315C63",
    width: "100%",
    borderRadius: 4,
    height: 50,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    fontFamily: "Kalligraaf Arabic Medium",
  },

  login: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  alreadytext: {
    fontFamily: "Kalligraaf Arabic",
    fontWeight: "400",
    fontSize: 14,
    color: "#777777",
  },

  Signin: {
    fontFamily: "Kalligraaf Arabic Medium",
    fontWeight: "500",
    fontSize: 14,
    color: "#0D3F47",
  },

  //custom input //

  labelStyle: {
    fontSize: 16,
    color: "#0D3F47",
    textAlign: "right",
    fontFamily: "Kalligraaf Arabic",
    right: 5,
    fontWeight: 400,
  },

  errorStyle: {
    color: "red",
    fontSize: 12,
    justifyContent: "center",
    textAlign: "center",
  },
});

export default styles;
