import React, { useState } from "react";
import { View, Text, TextInput, TextInputProps, StyleSheet, TouchableOpacity } from "react-native";
import styles from "../CustomInput/style"

interface FormInputProps extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
  isPassword?: boolean;
}

export default function FormInput({ label, error, touched, isPassword, ...props }: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);

return(
    <View >
        {!!label &&( <Text style={styles.label}>{label}</Text>)}
        <View>
            <TextInput style={[styles.input, touched && error ? styles.inputError : null]} 
            secureTextEntry ={isPassword && !showPassword } {...props}/>
      {touched && !!error && <Text style={styles.errorText}>{error}</Text>}
    
      </View>
      
    </View>
  );
}
