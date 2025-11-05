import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

type CustomButtonProps = {
  title?: string | React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: React.ReactNode; 
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  buttonStyle,
  textStyle,
  icon,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 12,
          borderRadius: 10,
          backgroundColor: disabled ? "#ccc" : "#1E1E1E",
        },
        buttonStyle,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          {icon && <View>{icon}</View>}

          {title &&
            (typeof title === "string" ? (
              <Text
                style={[
                  {
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "600",
                  },
                  textStyle,
                ]}
              >
                {title}
              </Text>
            ) : (
              title
            ))}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
