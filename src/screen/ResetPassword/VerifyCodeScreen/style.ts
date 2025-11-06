import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.08,
  },
  header: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: height * 0.05,
    gap: 50,
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
    fontFamily: "Kalligraaf Arabic Medium",
  },
  icon: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 25,
    tintColor: "#E1F2EE",
    borderRadius: 70,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    color: "#777777",
    marginBottom: 35,
    lineHeight: 18 * 1.36,
    fontWeight: "400",
    fontFamily: "Kalligraaf Arabic",
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#0D3F47",
    width: 48,
    height: 48,
    borderRadius: 4,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Cairo Semi Bold",
    fontWeight: "600",
    backgroundColor: "#FFFFFF",
    color: "#0D3F47",
  },
  otpInputError: {
    borderColor: "#E35757",
    backgroundColor: "#FDF5F5",
    color: "#E35757",
  },

  nextButton: {
    marginTop: 20,
    backgroundColor: "#315C63",
    width: "100%",
    borderRadius: 4,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    fontFamily: "Kalligraaf Arabic Medium",
  },

  nextButtonError: {
    backgroundColor: "#E35757",
  },
  nextButtonTextError: {
    color: "#FFFFFF",
    fontFamily: "Kalligraaf Arabic",
    fontWeight: 400,
    fontSize: 18,
  },

  Timer: {
    color: "#0D3F47",
    fontSize: 14,
    fontFamily: "Kalligraaf Arabic",
    fontWeight: "400",
    textDecorationLine: "underline",
  },
  Resend: {
    color: "#0D3F47",
    fontSize: 14,
    fontWeight: "400",
    textDecorationLine: "underline",
    fontFamily: "Kalligraaf Arabic",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    justifyContent: "center",
    textAlign: "center",
  },
});

export default styles;
