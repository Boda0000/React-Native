import React from "react";
import Navigator from "./src/screen/Navigation/Navigator";
import "./ReactotronConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { useFonts } from "expo-font";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Alexandria-Bold": require("./src/assets/fonts/Alexandria-Bold.ttf"),
    "Alexandria-Regular": require("./src/assets/fonts/Alexandria-Regular.ttf"),
    "Alexandria-Medium": require ("./src/assets/fonts/Alexandria-Medium.ttf"),
    "Kalligraaf Arabic" : require ("./src/assets/fonts/Kalligraaf Arabic.otf"),
    "Kalligraaf Arabic Bold" : require ("./src/assets/fonts/Kalligraaf Arabic Bold.otf"),
    "Kalligraaf Arabic Medium" : require ("./src/assets/fonts/Kalligraaf Arabic Medium.otf"),
    "Cairo Semi Bold" : require ("./src/assets/fonts/Cairo-SemiBold.ttf"),
    "IBMPlexSansArabic-Bold" : require ("./src/assets/fonts/IBMPlexSansArabic-Bold.ttf"),
    "IBM Plex Sans Arabic":require("./src/assets/fonts/IBMPlexSansArabic-Regular.ttf"),
    "IBMPlexSansArabic-Medium" : require ("./src/assets/fonts/IBMPlexSansArabic-Medium.ttf"),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
      <Toast />
    </QueryClientProvider>
  );
}
