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

export default function LoginPage({ navigation }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!mobile || !password) {
      setMessage("ادخل البيانات");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "https://manarbe.oetest.tech/api/v1/ar/auth/login",
        {
          data: {
            type: "user",
            attributes: {
              mobile: mobile,
              password: password,
              device_type: Platform.OS,
            },
            id: "null",
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

      <TextInput
        style={styles.input}
        placeholder="Mobile"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Loading..." : "Login"}
        </Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}


