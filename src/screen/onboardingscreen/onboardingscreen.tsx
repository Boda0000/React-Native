import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Onboarding from "../../components/onboarding/onboarding";
import { getSlidesData, Slide } from "../../data/slides";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../Navigation/rootstack";

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const slides: Slide[] = getSlidesData();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F8" />
      <Onboarding
        slides={slides}
          
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },
});
