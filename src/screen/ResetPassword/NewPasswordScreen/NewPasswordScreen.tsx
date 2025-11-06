import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomButton from "../../../components/btn/CustomButton";
import styles from "./style";
import i18n from "../../../locales/i18n";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Lock from "../../../assets/icons/lock.svg";

type RootStackParamList = {
  Login: undefined;
  NewPassword: { emailOrPhone: string };
};

type NewPasswordNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "NewPassword"
>;

const NewPasswordScreen: React.FC = () => {
  const navigation = useNavigation<NewPasswordNavProp>();
  const [loading, setLoading] = useState(false);

  const NewPasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required(i18n.t("Password required"))
      .min(8, i18n.t("The password must be at least 8 characters long.")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], i18n.t("The Passwords don't match"))
      .required(i18n.t("Confirm Password")),
  });

  const handleResetPassword = async (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    try {
      Alert.alert("", i18n.t("Password has been successfully updated"), [
        { text: i18n.t("Okay"), onPress: () => navigation.navigate("Login") },
      ]);
    } catch (err) {
      Alert.alert(
        "",
        i18n.t("An error occurred while updating your password.")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardShouldPersistTaps="handled">
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

          {/*App Icon*/}
          <Image
            source={require("../../../assets/images/AppIcon.png")}
            style={styles.icon}
            resizeMode="contain"
          />

          {/*Subtitle*/}
          <Text style={styles.subtitle}>{i18n.t("new_password_subtitle")}</Text>

          {/*Form*/}
          <Formik
            initialValues={{ newPassword: "", confirmPassword: "" }}
            validationSchema={NewPasswordSchema}
            validateOnBlur={true}
            validateOnChange={false}
            onSubmit={(values, { setTouched, validateForm }) => {
              setTouched({
                newPassword: true,
                confirmPassword: true,
              });

              validateForm(values).then((errors) => {
                if (Object.keys(errors).length === 0) {
                  handleResetPassword(values);
                }
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
              <View>
                {/*New Password*/}
                <CustomInput
                  label={i18n.t("New Password")}
                  placeholder={i18n.t("enter_new_password")}
                  leftIcon={<Lock width={16} height={16} />}
                  onChangeText={handleChange("newPassword")}
                  onBlur={handleBlur("newPassword")}
                  value={values.newPassword}
                  error={touched.newPassword ? errors.newPassword : undefined}
                  errorStyle={styles.errorStyle}
                  isPassword
                  touched={touched.newPassword}
                  labelStyle={styles.labelStyle}
                  placeholderStyle={styles.placeholderStyle}
                />

                {/*Confirm Password*/}
                <CustomInput
                  label={i18n.t("Confirm Password")}
                  leftIcon={<Lock width={16} height={16} />}
                  placeholder={i18n.t("enter_new_password")}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  error={
                    touched.confirmPassword ? errors.confirmPassword : undefined
                  }
                  errorStyle={styles.errorStyle}
                  isPassword
                  touched={touched.confirmPassword}
                  labelStyle={styles.labelStyle}
                  placeholderStyle={styles.placeholderStyle}
                />

                {/*Confirm Button*/}
                <CustomButton
                  title={i18n.t("Confirm")}
                  onPress={() => handleSubmit()}
                  loading={loading}
                  buttonStyle={styles.nextButton}
                  textStyle={styles.nextButtonText}
                />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewPasswordScreen;
