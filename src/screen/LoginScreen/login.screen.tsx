import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./style";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/btn/CustomButton";
import i18n from "../../locales/i18n";
import { useLogin } from "../../Hooks/useLogin";
import { useLanguage } from "../../Hooks/useLanguage";
import { useNavigation } from "@react-navigation/native";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .matches(/^\+20[1][0-9]{9}$/, "Please enter a valid mobile number"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters"),
});

export default function LoginPage() {
  const { lang, toggleLanguage } = useLanguage();
  const { mutate, isPending, isLoading } = useLogin();
  const navigation = useNavigation(); // 👈 إضافه

  const loading = isPending || isLoading;

  return (
    <View style={styles.container} key={lang}>
      <Image
        source={require("../../assets/images/AppIcon.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>{i18n.t("welcome")}</Text>

      <Formik
        key={lang}
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          mutate({
            mobile: values.username,
            password: values.password,
          });
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
            <View style={styles.x}>
              <CustomInput
                label={i18n.t("username_label")}
                placeholder={i18n.t("username_placeholder")}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                error={errors.username}
                touched={touched.username}
                key={`username-${lang}`}
                labelStyle={[styles.labelStyle]}
                inputStyle={styles.inputStyle}
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
                labelStyle={[styles.labelStyle]}
                inputStyle={styles.inputStyle}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword" as never)}
            >
              <Text>{i18n.t("Forgot Password")}</Text>
            </TouchableOpacity>

            <CustomButton
              title={i18n.t("login")}
              onPress={() => handleSubmit()}
              loading={isLoading}
              key={`login-${lang}`}
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
            />

            <CustomButton
              title={lang === "en" ? "العربية" : "English"}
              onPress={toggleLanguage}
              key={`lang-${lang}`}
              buttonStyle={styles.langButton}
              textStyle={styles.langButtonText}
            />
            <CustomButton
              title={i18n.t("register")}
              onPress={() => navigation.navigate("Registration" as never)}
              buttonStyle={styles.registerButton}
              textStyle={styles.registerButtonText}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
