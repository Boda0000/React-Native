import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/btn/CustomButton";
import SelectImageCard from "../../components/SelectImageCard/SelectImageCard";
import styles from "./style";
import i18n from "../../locales/i18n";
import Lock from "../../assets/icons/lock.svg";
import Username from "../../assets/icons/username.svg";
import Email from "../../assets/icons/email.svg";
import Mobile from "../../assets/icons/mobile.svg";

type RootStackParamList = {
  Register: undefined;
  Login: undefined;
};

type RegisterScreenNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "Register"
>;

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavProp>();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(i18n.t("First name required")),
    lastName: Yup.string().required(i18n.t("Last name required")),
    email: Yup.string()
      .email(i18n.t("Invalid email address"))
      .required(i18n.t("Email required")),
    phone: Yup.string().required(i18n.t("Mobile number required")),
    password: Yup.string()
      .min(8, i18n.t("The password must be at least 8 characters long."))
      .required(i18n.t("Password required")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], i18n.t("The Passwords don't match"))
      .required(i18n.t("Password required")),
  });

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
          {/* Header */}
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

            <Text style={styles.headerTitle}>{i18n.t("register")}</Text>
          </View>

          <SelectImageCard />

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={() => navigation.navigate("Login")}
            validateOnBlur
            validateOnChange
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.container}>
                {/* First & Last Name */}
                <View
                  style={{
                    flexDirection: "row-reverse",
                    gap: 13,
                    marginBottom: 3,
                  }}
                >
                  <CustomInput
                    label={i18n.t("First Name")}
                    placeholder={i18n.t("first Name")}
                    leftIcon={<Username width={12} height={12} />}
                    value={values.firstName}
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    touched={touched.firstName}
                    error={touched.firstName ? errors.firstName : undefined}
                    labelStyle={styles.labelStyle}
                    errorStyle={styles.errorStyle}
                    containerStyle={{ width: "48%" }}
                  />

                  <CustomInput
                    label={i18n.t("LastName")}
                    placeholder={i18n.t("lastName")}
                    leftIcon={<Username width={12} height={12} />}
                    value={values.lastName}
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    touched={touched.lastName}
                    error={touched.lastName ? errors.lastName : undefined}
                    labelStyle={styles.labelStyle}
                    errorStyle={styles.errorStyle}
                    containerStyle={{ width: "48%" }}
                  />
                </View>

                {/* Email */}
                <CustomInput
                  label={i18n.t("Email")}
                  placeholder={i18n.t("email")}
                  leftIcon={<Email width={12} height={12} />}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  touched={touched.email}
                  error={touched.email ? errors.email : undefined}
                  labelStyle={styles.labelStyle}
                  errorStyle={styles.errorStyle}
                />

                {/* Phone */}
                <CustomInput
                  label={i18n.t("Mobile Number")}
                  placeholder={i18n.t("mobile number")}
                  leftIcon={<Mobile width={12} height={12} />}
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  touched={touched.phone}
                  error={touched.phone ? errors.phone : undefined}
                  labelStyle={styles.labelStyle}
                  errorStyle={styles.errorStyle}
                  keyboardType="phone-pad"
                />

                {/* Password */}
                <CustomInput
                  label={i18n.t("Password")}
                  placeholder={i18n.t("enter_new_password")}
                  leftIcon={<Lock width={12} height={12} />}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  touched={touched.password}
                  error={touched.password ? errors.password : undefined}
                  isPassword
                  labelStyle={styles.labelStyle}
                  errorStyle={styles.errorStyle}
                  keyboardType="phone-pad"
                />

                {/* Confirm Password */}
                <CustomInput
                  label={i18n.t("confirmpassword")}
                  placeholder={i18n.t("enter_new_password")}
                  leftIcon={<Lock width={12} height={12} />}
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  touched={touched.confirmPassword}
                  error={
                    touched.confirmPassword ? errors.confirmPassword : undefined
                  }
                  isPassword
                  labelStyle={styles.labelStyle}
                  errorStyle={styles.errorStyle}
                  keyboardType="phone-pad"
                />

                {/* Next Button */}
                <CustomButton
                  title={i18n.t("Next")}
                  onPress={handleSubmit}
                  buttonStyle={styles.nextButton}
                  textStyle={styles.nextButtonText}
                />

                {/* Footer */}
                <View style={styles.login}>
                  <CustomButton
                    onPress={() => navigation.navigate("Login" as never)}
                    buttonStyle={styles.login} 
                  >
                    <Text style={styles.alreadytext}>
                      {i18n.t("Already have an account?")}{" "}
                    </Text>
                    <Text style={styles.Signin}>{i18n.t("Sign in")}</Text>
                  </CustomButton>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
