import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Dimensions,
  I18nManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

const { width } = Dimensions.get("window");

interface FormInputProps extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
  isPassword?: boolean;
  containerStyle?: object;
  inputStyle?: object;
  labelStyle?: object;
  errorStyle?: object;
  placeholderStyle?: object;
  leftIcon?: React.ReactNode;
}

export default function FormInput({
  label,
  error,
  touched,
  isPassword,
  value,
  onChangeText,
  onBlur,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  placeholder,
  leftIcon,
  ...rest
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isRTL = I18nManager.isRTL;

  return (
    <View style={containerStyle}>
      {/* Label */}
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      {/* Input Container */}
      <View
        style={[
          styles.inputContainer,
          {
            borderWidth: 1,
            borderColor: touched && error ? "red" : "#E1E1E1",
          },
        ]}
      >
        {/*Lock Icon*/}
        {leftIcon && (
          <View style={styles.leftIconContainer}>{leftIcon}</View>
        )}

        {/*Text*/}
        <TextInput
          style={[
            styles.input,
            inputStyle,
            {
              flex: 1,
              textAlign: isRTL ? "left" : "right",
              color: "#000",
            },
          ]}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={isPassword && !showPassword}
          placeholder={placeholder}
          placeholderTextColor="#BDBDBD"
          {...rest}
        />

        {/*Eye*/}
        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.rightIconContainer}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={width * 0.05}
              color="#B9B9B9"
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error */}
      {touched && error && (
        <Text style={[styles.errorText, errorStyle]}>{error}</Text>
      )}
    </View>
  );
}
