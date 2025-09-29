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

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .matches(/^\+20[1][0-9]{9}$/, "Please enter a valid mobile number")
    .required("Please enter your mobile number"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
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
      setMessage("تم تسجيل الدخول بنجاح ");

      navigation.navigate("Home");
    } catch (error: any) {
      console.log("Login error:", error.response?.data || error.message);
      setMessage("خطأ في تسجيل الدخول");
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
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            {errors.username && touched.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ? "Logging in..." : "Login"}
              </Text>
            </TouchableOpacity>

            {message !== "" && <Text style={styles.message}>{message}</Text>}
          </>
        )}
      </Formik>
    </View>
  );
}
