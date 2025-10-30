import { StyleSheet, Dimensions, I18nManager } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E1E1E",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#414E75",
    textAlign: "center",
    marginTop: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    width: 25,
    backgroundColor: "#2562EB",
  },

  // الزرار اللي تحت
  buttonsContainer: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginBottom: 35,
  },

  skipButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#315C63",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  skipText: {
    fontSize: 16,
    color: "#315C63",
    fontWeight: "500",
  },
  nextButton: {
    backgroundColor: "#315C63",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  // زر تغيير اللغة
  langSwitchContainer: {
    position: "absolute",
    top: 40,
    zIndex: 5,
  },
  langButton: {
    backgroundColor: "#E9EDF3",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  langText: {
    fontSize: 14,
    color: "#315C63",
    fontWeight: "600",
  },
});
