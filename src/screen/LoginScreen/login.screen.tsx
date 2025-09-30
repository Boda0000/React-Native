import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import axios from "axios";
import styles from "./style";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../components/CustomInput/CustomInput";
import FormInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/btn/CustomButton";

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
  const [message, setMessage] = useState("");

  const handleLogin = async (values) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "https://manarbe.oetest.tech/api/v1/ar/auth/login",
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

      console.log("Login success:", response.data);
      setMessage("Login successful");

      navigation.navigate("Home");
    } catch (error: any) {
      console.log("Login error:", error.response?.data || error.message);
      setMessage("Check Username or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <Formik
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
              label="Enter Username Or Mobile"
              placeholder="Mobile"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              error={errors.username}
              touched={touched.username}
            />

            <CustomInput
              label="Enter Your Password"
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              touched={touched.password}
              error={errors.password}
              isPassword
            />

            <CustomButton
              title="Login"
              onPress={() => handleSubmit()}
              loading={loading}
            />
            {message !== "" && <Text style={styles.message}>{message}</Text>}
          </>
        )}
      </Formik>
    </View>
  );
}
