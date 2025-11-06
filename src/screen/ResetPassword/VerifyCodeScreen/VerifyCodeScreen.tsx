import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import OtpInput from "../../../components/OtpInput/OtpInput";
import CustomButton from "../../../components/btn/CustomButton";
import styles from "./style";
import i18n from "../../../locales/i18n";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";
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

const VerifyCodeSchema = Yup.object().shape({
  code: Yup.string()
    .required(i18n.t("Code required"))
    .length(6, i18n.t("The code must be 6 digits long.")),
});

const VerifyCodeScreen: React.FC = () => {
  const navigation = useNavigation<VerifyCodeNavProp>();
  const route = useRoute<any>();
  const { emailOrPhone } = route.params;

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const [emptyCodeError, setEmptyCodeError] = useState(false);

  const handleVerify = (code: string) => {
    if (!code || code.trim() === "") {
      setErrorMessage(null);
      setEmptyCodeError(true);
      return;
    }

    setEmptyCodeError(false); 
    if (code === "123456") {
      setErrorMessage(null);
      navigation.navigate("NewPassword", { emailOrPhone });
    } else {
      setErrorMessage("الكود غلط");
    }
  };

  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    setTimer(30);
    setCanResend(false);
  };

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
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backIcon}
          >
            <MaterialIcons name="arrow-forward-ios" size={20} color="#1E1E1E" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{i18n.t("Password recovery")}</Text>
        </View>

        {/* Image */}
        <Image
          source={require("../../../assets/images/AppIcon.png")}
          style={styles.icon}
          resizeMode="contain"
        />

        {/* Subtitle */}
        <Text style={styles.subtitle}>{i18n.t("verify_code_subtitle")}</Text>

        {/* Formik + OtpInput */}
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
                    emptyCodeError
                      ? i18n.t("Please Enter The Code")
                      : hasError
                        ? i18n.t("Wrong Code")
                        : i18n.t("Confirm")
                  }
                 
                  onPress={() => handleVerify(values.code)}
                  buttonStyle={[
                    styles.nextButton,
                    hasError || emptyCodeError ? styles.nextButtonError : null,
                  ]}
                  textStyle={[
                    styles.nextButtonText,
                    hasError || emptyCodeError
                      ? styles.nextButtonTextError
                      : null,
                  ]}
                />

                <View style={{ marginTop: 4, alignItems: "center" }}>
                  {!canResend ? (
                    <Text style={styles.Timer}>{formatTime(timer)}</Text>
                  ) : (
                    <TouchableOpacity onPress={handleResend}>
                      <Text style={styles.Resend}>
                        <Reload width={12} height={7} fill="#315C63" />{" "}
                        {i18n.t("Resend code")}
                      </Text>
                    </TouchableOpacity>
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
