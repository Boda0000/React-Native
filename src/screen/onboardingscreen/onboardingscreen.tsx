import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Onboarding from "../../components/onboarding/onboarding";
import { getSlidesData, Slide } from "../../data/slides";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../Navigation/Rootstack"; // النوع الصحيح للـ navigation

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const slides: Slide[] = getSlidesData();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Onboarding
        slides={slides}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
onFinish={() => navigation.replace("Login")}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F6F8" },
});
