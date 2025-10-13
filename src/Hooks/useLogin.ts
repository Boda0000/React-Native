import { Mutation, useMutation } from "@tanstack/react-query";
import { getCurrentLanguage } from "../locales/i18n";
import { mapUser, UserModel } from "../models/UserModel";
import { saveUser } from "../storage/storageService";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";


const showMessage = (message: string, success: boolean = true) => {
  Toast.show({
    type: success ? "success" : "error",
    text1: message,
    position: "top",
  });
};

export type Logindata = {
  mobile: string;
  password: string;
};

async function loginFn(login: Logindata) {
  const lang = await getCurrentLanguage();

  const response = await fetch(
    `https://manarbe.oetest.tech/api/v1/${lang}/auth/login`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        data: {
          type: "user",
          attributes: {
            mobile: login.mobile,
            password: login.password,
            device_type: "ios",
          },
          id: "null",
        },
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.errors?.[0]?.detail || "Invalid mobile number or password"
    );
  }

  const user: UserModel = mapUser(data.data);
  return user;
}

export function useLogin() {
  const navigation = useNavigation<any>();

  const mutation = useMutation({
    mutationFn: loginFn,
    onSuccess: async (user: UserModel) => {
      await saveUser(user);

      if (user.message) {
        showMessage(user.message, true);
      }

      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    },
    onError: (error: any) => {
      showMessage(error.message || "Login failed", false);
      console.log("Login error:", error);
    },
  });

  return mutation; 
}

