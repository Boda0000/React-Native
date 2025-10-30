import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  I18nManager,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import i18n from "src/locales/i18n";
import { Slide } from "../../data/slides";
import styles from "./styles";
import CustomButton from "../btn/CustomButton";

const { width } = Dimensions.get("window");

interface OnboardingProps {
  slides: Slide[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
  onFinish: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({
  slides,
  currentSlide,
  onSlideChange,
  onFinish,
}) => {
  const flatListRef = React.useRef<FlatList<any>>(null);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentSlide + 1 });
      onSlideChange(currentSlide + 1);
    } else {
      onFinish();
    }
  };

  const handleSkip = () => onFinish();

  return (
    <View style={styles.container}>
      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          onSlideChange(index);
        }}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentSlide === index && styles.activeDot]}
          />
        ))}
      </View>

      {/* Buttons */}
        <View
          style={[
            styles.buttonsContainer]}
        >
          {/* تخطي */}
          {currentSlide < slides.length - 1 ? (
            <TouchableOpacity onPress={handleSkip}>
              <Text style={styles.skipText}>{i18n.t("Skip")}</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 50 }} />
          )}

          {/* زرار السهم */}
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <MaterialIcons
              name={I18nManager.isRTL ? "arrow-back-ios" : "arrow-forward-ios"}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Onboarding;
 