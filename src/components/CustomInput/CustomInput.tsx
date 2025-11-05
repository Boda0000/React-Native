import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  StyleSheet,
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
  iconStyle?: object;
  placeholderStyle?: object;
  reverseIcon?: boolean; 
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
  iconStyle,
  placeholderStyle,
  placeholder,
  reverseIcon,
  ...rest
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isRTL = I18nManager.isRTL; 
  const iconOnLeft = reverseIcon || isRTL;

  return (
    <View style={containerStyle}>
      {!!label && <Text style={[style.label, labelStyle]}>{label}</Text>}

      <View
        style={[
          style.inputContainer,
          { flexDirection: iconOnLeft ? "row-reverse" : "row" },
        ]}
      >
        <TextInput
          style={[
            style.input,
            touched && error ? style.inputError : null,
            inputStyle,
            { textAlign: reverseIcon ? "right" : "left"},
          ]}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={isPassword && !showPassword}
          placeholder={placeholder}
          placeholderTextColor="#CACACA"
          {...rest}
        />

        {isPassword && (
          <TouchableOpacity
            style={[style.iconInside, iconStyle ,  reverseIcon ? { left: 10, right: "auto" } : { right: 10, left: "auto" }, ]}
            
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
        <Text style={[style.errorText, errorStyle]}>{error}</Text>
      )}
    </View>
  );
}
