import React, { useState, useRef, useEffect } from "react";
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
import Arabic from "src/assets/icons/arabic.svg";


const { width } = Dimensions.get("window");

const Onboarding: React.FC<{ slides: Slide[] }> = ({ slides }) => {
  const navigation = useNavigation();
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLangList, setShowLangList] = useState(false);
  const [lang, setLang] = useState(i18n.locale);

  const firstThreeSlides = slides.slice(0, 3);

  useEffect(() => {
    const loadLang = async () => {
      const savedLang = await AsyncStorage.getItem("appLang");
      if (savedLang) {
        i18n.locale = savedLang;
        setLang(savedLang);
        I18nManager.forceRTL(savedLang === "ar");
      }
    };
    loadLang();
  }, []);

  const handleNext = () => {
    if (currentSlide < firstThreeSlides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentSlide + 1 });
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleSkip = () => {
    navigation.navigate("LastOnboardingScreen" as never);
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

  const renderSlide = ({ item }: { item: Slide }) => (
    <View style={[styles.slide, { width }]}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <Text style={[styles.title, I18nManager.isRTL && { textAlign: "right" }]}>
        {item.title}
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
        {firstThreeSlides.map((_, index) => (
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

      {/*Slides*/}
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
          <MaterialIcons name="arrow-back-ios" size={20} color="#FFFFFF" />
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
