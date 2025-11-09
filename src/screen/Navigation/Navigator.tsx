import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "../onboardingscreen/onboardingscreen";
import LastOnboardingScreen from "../LastOnboarding/LastOnboarding";
import LoginPage from "../LoginScreen/login.screen";
import Registration from "../Registration/Registration";
import ForgotPasswordScreen from "../ResetPassword/ForgotPasswordScreen/ForgotPasswordScreen";
import VerifyCodeScreen from "../ResetPassword/VerifyCodeScreen/VerifyCodeScreen";
import NewPasswordScreen from "../ResetPassword/NewPasswordScreen/NewPasswordScreen";
import HomeScreen from "../homescreen/HomeScreen";
import { initLanguage } from "../../locales/i18n";

const Stack = createStackNavigator();

export default function Navigator() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await initLanguage();
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
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        {/* Onboarding flow */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen
          name="LastOnboardingScreen"
          component={LastOnboardingScreen}
        />

        {/* Auth flow */}
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />

        {/* Main app */}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
