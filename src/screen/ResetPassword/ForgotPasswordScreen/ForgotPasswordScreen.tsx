import React from "react";
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
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomButton from "../../../components/btn/CustomButton";
import styles from "./style";
import i18n from "../../../locales/i18n";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import lock from "../../../assets/icons/lock.svg"

type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  VerifyCode: { emailOrPhone: string };
};

type ForgotPasswordNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "ForgotPassword"
>;

const ForgotPasswordSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .trim()
    .required(i18n.t("This field is required"))
    .matches(/^(\+20|0)?1[0-9]{9}$/, (i18n.t("Enter a valid phone number"))),
});

const ForgotPasswordScreen: React.FC = () => {
  const navigation = useNavigation<ForgotPasswordNavProp>();

  const handleSubmitForm = (values: { emailOrPhone: string }) => {
    navigation.navigate("VerifyCode", { emailOrPhone: values.emailOrPhone });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          {/*Header*/}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backIcon}
            >
              <MaterialIcons
                name="arrow-forward-ios"
                size={20}
                color="#1E1E1E"
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>
              {i18n.t("Password recovery")}
            </Text>
          </View>

          {/*Image-Subtitle*/}
          <Image
            source={require("../../../assets/images/AppIcon.png")}
            style={styles.icon}
            resizeMode="contain" 
          />

          <Text style={styles.subtitle}>
            {i18n.t("forgot_password_subtitle")}
          </Text>

          {/*Form*/}
          <Formik
            initialValues={{ emailOrPhone: "" }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={handleSubmitForm}
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
                  label={i18n.t("email_or_phone")}
                  placeholder={i18n.t("enter_email_or_phone")}
                  onChangeText={handleChange("emailOrPhone")}
                  onBlur={handleBlur("emailOrPhone")}
                  value={values.emailOrPhone}
                  reverseIcon
                  keyboardType="phone-pad"
                  labelStyle={styles.labelStyle}
                  placeholderStyle={styles.placeholderStyle}
                />

                <CustomButton
                  title={i18n.t("Confirm")}
                  onPress={() => handleSubmit()}
                  buttonStyle={styles.nextButton}
                  textStyle={styles.nextButtonText}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
