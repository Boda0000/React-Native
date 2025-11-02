import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from "react-native";
import style from "../btn/style";

interface ButtonProps {
  title?: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export default function CustomButton({
  title,
  onPress,
  loading,
  disabled,
  buttonStyle,
  textStyle,
  children,
  iconLeft,
  iconRight,
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
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : children ? (
        children
      ) : (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {iconLeft && <View style={{ marginRight: 6 }}>{iconLeft}</View>}

          {title && <Text style={[style.buttonText, textStyle]}>{title}</Text>}

          {iconRight && <View style={{ marginLeft: 6 }}>{iconRight}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
}
