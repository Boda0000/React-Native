import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import styles from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../assets/images/1.png")} />
      <Text style={styles.title}>News App</Text>
      <Image style={styles.img} source={require("../../assets/images/2.png")} />
    </View>
  );
}
