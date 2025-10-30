import React, { useRef } from "react";
import { View, Text, Animated, FlatList, Image, TouchableOpacity, Dimensions, I18nManager } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Slide } from "../../data/slides";
import styles from "./styles";

const { width } = Dimensions.get("window");

export type OnboardingProps = {
  slides: Slide[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
  onFinish: () => void;
};

const Onboarding: React.FC<OnboardingProps> = ({ slides, currentSlide, onSlideChange, onFinish }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<Slide> | null>(null);

  const handleNext = () => {
    const nextIndex = currentSlide + 1;
    if (nextIndex >= slides.length) {
      onFinish();
      return;
    }
    flatListRef.current?.scrollToOffset({ offset: nextIndex * width, animated: true });
    onSlideChange(nextIndex);
  };

  const handleScrollEnd = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    onSlideChange(index);
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        inverted={I18nManager.isRTL}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={handleScrollEnd}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
      />

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        {slides.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = scrollX.interpolate({ inputRange, outputRange: [10, 25, 10], extrapolate: "clamp" });
          const dotColor = scrollX.interpolate({ inputRange, outputRange: ["#ccc", "#2562EB", "#ccc"], extrapolate: "clamp" });
          return <Animated.View key={i} style={[styles.dot, { width: dotWidth, backgroundColor: dotColor }]} />;
        })}
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {currentSlide < slides.length - 1 ? (
          <TouchableOpacity onPress={onFinish}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 60 }} />
        )}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <MaterialIcons name={I18nManager.isRTL ? "arrow-back-ios" : "arrow-forward-ios"} size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
