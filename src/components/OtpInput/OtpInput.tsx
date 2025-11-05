import React, { useRef, useState } from "react";
import { View, TextInput, TextStyle, ViewStyle } from "react-native";

interface OtpInputProps {
  length: number;
  value: string;
  onChange: (code: string) => void;
  onComplete?: (code: string) => void;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const OtpInput: React.FC<OtpInputProps> = ({
  length,
  value,
  onChange,
  onComplete,
  inputStyle,
  containerStyle,
}) => {
  const inputsRef = useRef<Array<TextInput | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleChange = (text: string, index: number) => {
    const newValue = value.split("");
    newValue[index] = text[0] || "";
    const updatedCode = newValue.join("");
    onChange(updatedCode);

    if (text && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (updatedCode.length === length && onComplete) {
      onComplete(updatedCode);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <View
      style={[
        { flexDirection: "row", justifyContent: "space-between" },
        containerStyle,
      ]}
    >
      {Array.from({ length }).map((_, i) => (
        <TextInput
          key={i}
          ref={(ref) => (inputsRef.current[i] = ref)}
          value={value[i] || ""}
          onChangeText={(text) => handleChange(text, i)}
          onFocus={() => setFocusedIndex(i)}
          onBlur={() => setFocusedIndex(null)}
          onKeyPress={(e) => handleKeyPress(e, i)}
          keyboardType="number-pad"
          maxLength={1}
          style={[
            inputStyle,
            {
              borderColor: focusedIndex === i ? "#315C63" : "#E1E1E1",
            },
          ]}
          selectionColor="transparent"
          cursorColor="#315C63"
        />
      ))}
    </View>
  );
};

export default OtpInput;
