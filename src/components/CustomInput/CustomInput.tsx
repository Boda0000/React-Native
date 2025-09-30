import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../CustomInput/style";

interface FormInputProps extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
  isPassword?: boolean;
}

export default function FormInput({
  label,
  error,
  touched,
  isPassword,
  ...props
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      {!!label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, touched && error ? styles.inputError : null]}
          secureTextEntry={isPassword && !showPassword}
          {...props}
        />

        {isPassword && (
          <TouchableOpacity
            style={styles.iconInside}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>

      {touched && !!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
