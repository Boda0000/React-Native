import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#4e1010ff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#9e3a3aff",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: "black",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 30,
  },

  loginButton: {
    backgroundColor: "#315C63",
    borderRadius: 4,
    width: "100%",
    alignSelf: "center",
    fontWeight: "500",
    fontFamily: "Kalligraaf Arabic",
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 500,
  },

  langButton: {
    backgroundColor: "#C6E5DE",
    borderRadius: 4,
    width: "100%",
    alignSelf: "center",
    fontWeight: "500",
    fontFamily: "Kalligraaf Arabic",
  },
  langButtonText: {
    color: "#0D3F47",
    fontSize: 18,
    fontWeight: 500,
  },
  labelStyle: {
    fontSize: 16,
    color: "#0D3F47",
    marginBottom: 6,
    textAlign: "right",
    fontFamily: "Kalligraaf Arabic",
    fontWeight: 400,
  },

  inputStyle: {
    fontSize: 16,
    fontFamily: "Kalligraaf Arabic",
    textAlign: "right",
    marginBottom: 2,
  },

  x: {
    width: "100%",
  },
});
