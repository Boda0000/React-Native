import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import style from "../btn/style";

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>; 
  textStyle?: StyleProp<TextStyle>;
}

export default function CustomButton({
  title,
  onPress,
  loading,
  disabled,
  buttonStyle,
  textStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        style.button, 
        disabled ? style.buttonDisabled : null,
        buttonStyle, 
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[style.buttonText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
