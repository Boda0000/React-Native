import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  I18nManager,
} from "react-native";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./style";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/btn/CustomButton";
import Toast from "react-native-toast-message";
import { mapUser, UserModel } from "../../models/UserModel";
import { saveUser } from "../../storage/storageService";
import { changeLanguage, getCurrentLanguage } from "../../locales/i18n";
import i18n from "../../locales/i18n";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .matches(/^\+20[1][0-9]{9}$/, "Please enter a valid mobile number"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters"),
});

export default function LoginPage({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState(i18n.locale);

  useEffect(() => {
    const initLang = async () => {
      const current = await getCurrentLanguage();
      setLang(current);
      i18n.locale = current;
      I18nManager.forceRTL(current === "ar");
    };
    initLang();
  }, []);

  const showMessage = (message: string, success: boolean = true) => {
    Toast.show({
      type: success ? "success" : "error",
      text1: message,
      position: "top",
    });
  };

  const toggleLanguage = async () => {
    const newLang = lang === "en" ? "ar" : "en";
    await changeLanguage(newLang);
    i18n.locale = newLang;
    I18nManager.forceRTL(newLang === "ar");
    setLang(newLang);
  };

  const handleLogin = async (values: { mobile: string; password: string }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://manarbe.oetest.tech/api/v1/${lang}/auth/login`,
        {
          data: {
            type: "user",
            attributes: {
              mobile: values.mobile,
              password: values.password,
              device_type: Platform.OS,
            },
            id: null,
          },
        },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      );

      const user: UserModel = mapUser(response.data);
      await saveUser(user);

      if (user.message) {
        showMessage(user.message, true);
      }

      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } catch (error: any) {
      console.log("Login error full:", JSON.stringify(error, null, 2));
      showMessage(
        error.response?.data?.errors?.[0]?.detail || "Login failed",
        false
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container} key={lang}>
      <Text style={styles.title}>{i18n.t("welcome")}</Text>

      <Formik
        key={lang}
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          handleLogin({ mobile: values.username, password: values.password });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <CustomInput
              label={i18n.t("username_label")}
              placeholder={i18n.t("username_placeholder")}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              error={errors.username}
              touched={touched.username}
              key={`username-${lang}`}
            />

            <CustomInput
              label={i18n.t("password_label")}
              placeholder={i18n.t("password_placeholder")}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              touched={touched.password}
              error={errors.password}
              isPassword
              key={`password-${lang}`}
            />

            <CustomButton
              title={i18n.t("login")}
              onPress={() => handleSubmit()}
              loading={loading}
              key={`login-${lang}`}
            />

            <CustomButton
              title={lang === "en" ? "العربية" : "English"}
              onPress={toggleLanguage}
              key={`lang-${lang}`}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
