import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews";
import styles from "./styles";

const HomeScreen = () => {
  const [textcont, setTextcont] = useState("News");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    Alert.alert("counter or text changed");
  }, [textcont, counter]);

  function changeText() {
    setTextcont("Next News");
    setCounter((prevValue) => {
      if (prevValue / 2 === 0) {
        return prevValue + 1;
      } else {
        return prevValue + 1;
      }
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <MainNews />
      <View style={styles.content}>
        <Text style={styles.text}>{textcont}</Text>
        <Text style={styles.text}>{counter}</Text>
        <TouchableOpacity style={styles.btn} onPress={changeText}>
          <Text style={styles.btnText}>Click me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
