import React, { useState } from "react";
import { View, Text, Image, I18nManager } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";
import CustomButton from "../../components/btn/CustomButton";
import i18n from "src/locales/i18n";
import styles from "./style";
import Arabic from "src/assets/icons/arabic.svg";

const LastOnboardingScreen = () => {
  const navigation = useNavigation();
  const [showLangList, setShowLangList] = useState(false);
  const [lang, setLang] = useState(i18n.locale);

  const handleStart = () => {
    navigation.navigate("Login" as never);
  };

  const changeLanguage = async (newLang: string) => {
    if (newLang === lang) return;
    await AsyncStorage.setItem("appLang", newLang);
    i18n.locale = newLang;
    setLang(newLang);
    I18nManager.forceRTL(newLang === "ar");
    setShowLangList(false);
    await Updates.reloadAsync(); 
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.langWrapper,
          I18nManager.isRTL ? { left: 20 } : { right: 20 },
        ]}
      >
        <CustomButton
          onPress={() => setShowLangList(!showLangList)}
          buttonStyle={styles.langButton}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Text style={styles.langText}>العربية</Text>
            <Arabic width={30} height={20} />
          </View>
        </CustomButton>

        {showLangList && (
          <View style={styles.dropdownContainer}>
            <CustomButton
              onPress={() => changeLanguage("ar")}
              buttonStyle={styles.dropdownItem}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Text style={styles.dropdownText}>العربية</Text>
                <Arabic width={30} height={20} />
              </View>
            </CustomButton>
          </View>
        )}
      </View>

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
