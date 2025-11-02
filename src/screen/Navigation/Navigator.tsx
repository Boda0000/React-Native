import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../LoginScreen/login.screen";
import HomeScreen from "../homescreen/HomeScreen";
import OnboardingScreen from "../onboardingscreen/onboardingscreen";
import LastOnboardingScreen from "../LastOnboarding/LastOnboarding";
import { initLanguage } from "../../locales/i18n";

const RootStack = createStackNavigator();
const OnboardingStack = createStackNavigator();

function OnboardingFlow() {
  return (
    <OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
      <OnboardingStack.Screen
        name="OnboardingMain"
        component={OnboardingScreen}
      />
      <OnboardingStack.Screen
        name="LastOnboardingScreen"
        component={LastOnboardingScreen}
      />
    </OnboardingStack.Navigator>
  );
}

export default function Navigator() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        initLanguage();
      } catch (error) {
        console.log("Error initializing app:", error);
      } finally {
        setIsReady(true);
      }
    };
    initializeApp();
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="OnboardingFlow" component={OnboardingFlow} />
        <RootStack.Screen name="Login" component={LoginPage} />
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
