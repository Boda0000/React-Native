import React from "react";
import { View, Text, Image, I18nManager } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/btn/CustomButton";
import i18n from "src/locales/i18n";
import styles from "./style";

const LastOnboardingScreen = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/onBoarding/illustration 4.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={[styles.title, I18nManager.isRTL && { textAlign: "right" }]}>
        {i18n.t("Onboarding.Slides.3.title")}
      </Text>

      <Text
        style={[styles.subtitle, I18nManager.isRTL && { textAlign: "right" }]}
      >
        {i18n.t("Onboarding.Slides.3.subtitle")}
      </Text>

      <CustomButton
        title={i18n.t("browseCourses")}
        onPress={handleStart}
        buttonStyle={styles.startButton}
        textStyle={styles.startText}
      />
      <Text style={styles.loginText}>
        {i18n.t("haveAccount")}{" "}
        <Text style={styles.loginLink}>{i18n.t("signIn")}</Text>
      </Text>
    </View>
  );
};

export default LastOnboardingScreen;
