// src/navigation/Rootstack.ts
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Home: undefined;
};


export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
