import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import style from "../btn/style";

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
}
export default function CustomButton({title,onPress,loading,disabled,}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[style.button, disabled ? style.buttonDisabled : null]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={style.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
