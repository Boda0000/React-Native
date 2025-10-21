import React from "react";
import Navigator from "./src/screen/Navigation/Navigator";
import reactotron from "reactotron-react-native";
import "./ReactotronConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";


// @ts-ignore
console.tron.log("🚀 Reactotron Connected!");

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
      <Toast />
    </QueryClientProvider>
  );
}
