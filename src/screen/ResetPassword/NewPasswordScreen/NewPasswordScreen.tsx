import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomButton from "../../../components/btn/CustomButton";
import styles from "./style";
import i18n from "../../../locales/i18n";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

type RootStackParamList = {
  Login: undefined;
  NewPassword: { emailOrPhone: string };
};

type NewPasswordNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "NewPassword"
>;
type NewPasswordRouteProp = RouteProp<RootStackParamList, "NewPassword">;

const NewPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("كلمة المرور مطلوبة")
    .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "كلمتا المرور غير متطابقتين")
    .required("يرجى تأكيد كلمة المرور"),
});

const NewPasswordScreen: React.FC = () => {
  const navigation = useNavigation<NewPasswordNavProp>();
  const route = useRoute<NewPasswordRouteProp>();
  const { emailOrPhone } = route.params;
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    try {
      // await axios.post("/auth/reset-password", { emailOrPhone, newPassword: values.newPassword });
      Alert.alert("", "تم تحديث كلمة المرور بنجاح", [
        { text: "حسناً", onPress: () => navigation.navigate("Login") },
      ]);
    } catch {
      Alert.alert("", "حدث خطأ أثناء تحديث كلمة المرور");
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
          {/* Header */}
          <View style={styles.header}>
            <CustomButton
              onPress={() => navigation.goBack()}
              buttonStyle={styles.backIcon}
              icon={<MaterialIcons name="arrow-forward-ios" size={20} color="#1E1E1E" />}
            />
            <Text style={styles.headerTitle}>{i18n.t("Password recovery")}</Text>
          </View>

          {/* Icon */}
          <Image
            source={require("../../../assets/images/Lock.jpg")}
            style={styles.icon}
          />

          {/* Subtitle */}
          <Text style={styles.subtitle}>{i18n.t("new_password_subtitle")}</Text>

          {/* Form */}
          <Formik
            initialValues={{ newPassword: "", confirmPassword: "" }}
            validationSchema={NewPasswordSchema}
            onSubmit={handleResetPassword}
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
                  label={i18n.t("New Password")}
                  placeholder={i18n.t("enter_new_password")}
                  onChangeText={handleChange("newPassword")}
                  onBlur={handleBlur("newPassword")}
                  value={values.newPassword}
                  error={touched.newPassword ? errors.newPassword : undefined}
                  isPassword
                  reverseIcon
                  labelStyle={styles.labelStyle}
                  placeholderStyle={styles.placeholderStyle}
                />

                <CustomInput
                  label={i18n.t("Confirm Password")}
                  placeholder={i18n.t("enter_new_password")}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  error={
                    touched.confirmPassword ? errors.confirmPassword : undefined
                  }
                  isPassword
                  reverseIcon
                  labelStyle={styles.labelStyle}
                  placeholderStyle={styles.placeholderStyle}
                />

                <CustomButton
                  title={i18n.t("Confirm")}
                  onPress={() => handleSubmit()}
                  loading={loading}
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

export default NewPasswordScreen;
