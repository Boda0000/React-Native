import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import OtpInput from "../../../components/OtpInput/OtpInput";
import CustomButton from "../../../components/btn/CustomButton";
import styles from "./style";
import i18n from "../../../locales/i18n";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Reload from "src/assets/icons/Reload.svg";

type RootStackParamList = {
  ForgotPassword: undefined;
  VerifyCode: { emailOrPhone: string };
  NewPassword: { emailOrPhone: string };
};

type VerifyCodeNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "VerifyCode"
>;
type VerifyCodeRouteProp = RouteProp<RootStackParamList, "VerifyCode">;

const VerifyCodeSchema = Yup.object().shape({
  code: Yup.string()
    .required("الكود مطلوب")
    .length(6, "يجب أن يكون الكود 6 أرقام"),
});

const VerifyCodeScreen: React.FC = () => {
  const navigation = useNavigation<VerifyCodeNavProp>();
  const route = useRoute<VerifyCodeRouteProp>();
  const { emailOrPhone } = route.params;

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const handleVerify = useCallback(
    (code: string) => {
      if (code === "123456") {
        setErrorMessage(null);
        navigation.navigate("NewPassword", { emailOrPhone });
      } else {
        setErrorMessage("");
      }
    },
    [emailOrPhone, navigation]
  );

  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = useCallback(() => {
    setTimer(30);
    setCanResend(false);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <CustomButton
            onPress={() => navigation.goBack()}
            buttonStyle={styles.backIcon}
            icon={<MaterialIcons name="arrow-forward-ios" size={20} color="#1E1E1E" />}
          />
          <Text style={styles.headerTitle}>{i18n.t("Password recovery")}</Text>
        </View>

        {/* Lock Icon */}
        <Image
          source={require("../../../assets/images/Lock.jpg")}
          style={styles.icon}
        />

        {/* Subtitle */}
        <Text style={styles.subtitle}>{i18n.t("verify_code_subtitle")}</Text>

        {/* Form */}
        <Formik
          initialValues={{ code: "" }}
          validationSchema={VerifyCodeSchema}
          onSubmit={({ code }) => handleVerify(code)}
        >
          {({ handleSubmit, values, setFieldValue }) => {
            const hasError = !!errorMessage;

            return (
              <>
                <OtpInput
                  length={6}
                  value={values.code}
                  onChange={(code) => {
                    setFieldValue("code", code);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  onComplete={() => handleSubmit()}
                  inputStyle={[
                    styles.otpInput,
                    hasError ? styles.otpInputError : {},
                  ]}
                  containerStyle={styles.otpContainer}
                />

                <CustomButton
                  title={
                    hasError
                      ? "الرمز غير صحيح برجاء التأكد منه والمحاولة مرة أخرى"
                      : i18n.t("Confirm")
                  }
                  onPress={() => handleSubmit()}
                  buttonStyle={[
                    styles.nextButton,
                    hasError ? styles.nextButtonError : null,
                  ]}
                  textStyle={[
                    styles.nextButtonText,
                    hasError ? styles.nextButtonTextError : null,
                  ]}
                />

                <View style={{ marginTop: 4, alignItems: "center" }}>
                  {!canResend ? (
                    <Text style={styles.Timer}>{formatTime(timer)}</Text>
                  ) : (
                    <CustomButton
                      onPress={handleResend}
                      title={
                        <>
                          <Reload width={12} height={7} fill="#315C63" />{" "}
                          {i18n.t("Resend code")}
                        </>
                      }
                      buttonStyle={styles.Resend}
                    />
                  )}
                </View>
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerifyCodeScreen;
