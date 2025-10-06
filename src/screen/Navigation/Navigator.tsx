import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../LoginScreen/login.screen";
import HomeScreen from "../homescreen/HomeScreen";
import { getUser } from "../../storage/storageService";
import Toast from "react-native-toast-message";
import { initLanguage } from "../../locales/i18n";

const Stack = createStackNavigator();

export default function Navigator() {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const [user] = await Promise.all([getUser(), initLanguage()]);
        setInitialRoute(user ? "Home" : "Login");
      } catch (error) {
        console.log("Error initializing app:", error);
        setInitialRoute("Login");
      } finally {
        setIsReady(true);
      }
    };

    initializeApp();
  }, []);

  if (!isReady || !initialRoute) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>

      <Toast />
    </NavigationContainer>
  );
}
