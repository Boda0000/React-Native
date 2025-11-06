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
import style from "./style";

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

  const lockPosition = isRTL ? "left" : "right";
  const eyePosition = isRTL ? "right" : "left";

  return (
    <View style={containerStyle}>
      {!!label && <Text style={[style.label, labelStyle]}>{label}</Text>}

      <View style={[style.inputContainer, { position: "relative" }]}>
        {leftIcon && (
          <View
            style={{
              position: "absolute",
              [lockPosition]: 1,
             
            }}
          >
            {leftIcon}
          </View>
        )}

        <TextInput
          style={[
            style.input,
            touched && error ? style.inputError : null,
            inputStyle,
            {
              paddingLeft: !isRTL && leftIcon ? 30 : 20, 
              paddingRight: isRTL && leftIcon ? 30 : 20, 
              textAlign: isRTL ? "left" : "right",
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

        {isPassword && (
          <TouchableOpacity
            style={{
              position: "absolute",
              [eyePosition]: 10,
              top: "50%",
              transform: [{ translateY: -10 }],
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={width * 0.05}
              color="#B9B9B9"
            />
          </TouchableOpacity>
        )}
      </View>

      {touched && !!error && (
        <Text style={[style.errorText, errorStyle, { marginTop: 4 }]}>{error}</Text>
      )}
    </View>
  );
}
