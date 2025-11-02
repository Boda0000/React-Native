import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  I18nManager,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";
import i18n from "src/locales/i18n";
import styles from "./styles";
import CustomButton from "../btn/CustomButton";
import { Slide } from "../../data/slides";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Onboarding: React.FC<{ slides: Slide[] }> = ({ slides }) => {
  const navigation = useNavigation();
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLangList, setShowLangList] = useState(false);

  const firstThreeSlides = slides.slice(0, 3);

  const handleNext = () => {
    if (currentSlide < firstThreeSlides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentSlide + 1 });
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleSkip = () => {
    navigation.navigate("LastOnboardingScreen" as never);
  };

  // 🔹 Language Change
  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("appLang", lang);
    i18n.locale = lang;
    I18nManager.forceRTL(lang === "ar");
    setShowLangList(false);
    await Updates.reloadAsync();
  };

  // 🔹 Render single slide
  const renderSlide = ({ item }: { item: Slide }) => (
    <View style={[styles.slide, { width }]}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <Text style={[styles.title, I18nManager.isRTL && { textAlign: "right" }]}>
        {(item.title)}
      </Text>

      <Text
        style={[styles.subtitle, I18nManager.isRTL && { textAlign: "right" }]}
      >
        {item.subtitle}
      </Text>

      <View
        style={[
          styles.dotsContainer,
          I18nManager.isRTL && { flexDirection: "row-reverse" },
        ]}
      >
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentSlide === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );

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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.langText}>
              {i18n.locale === "ar" ? "العربية" : "English"}
            </Text>
            <MaterialIcons
              name={showLangList ? "arrow-drop-up" : "arrow-drop-down"}
              size={22}
              color="#006D77"
            />
          </View>
        </CustomButton>

        {showLangList && (
          <View style={styles.dropdownContainer}>
            <CustomButton
              title="العربية"
              onPress={() => changeLanguage("ar")}
              buttonStyle={styles.dropdownItem}
              textStyle={styles.dropdownText}
            />
            <CustomButton
              title="English"
              onPress={() => changeLanguage("en")}
              buttonStyle={styles.dropdownItem}
              textStyle={styles.dropdownText}
            />
          </View>
        )}
      </View>

      <FlatList
        ref={flatListRef}
        data={firstThreeSlides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderSlide}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentSlide(index);
        }}
      />

      <View
        style={[
          styles.bottomContainer,
          I18nManager.isRTL && { flexDirection: "row-reverse" },
        ]}
      >
        <CustomButton onPress={handleNext} buttonStyle={styles.arrowButton}>
          <MaterialIcons
            name={I18nManager.isRTL ? "arrow-forward-ios" : "arrow-back-ios"}
            size={20}
            color="#FFFFFF"
          />
        </CustomButton>

        <CustomButton
          title={i18n.t("Skip")}
          onPress={handleSkip}
          buttonStyle={styles.skipButton}
          textStyle={styles.skipText}
        />
      </View>
    </View>
  );
};

export default Onboarding;
