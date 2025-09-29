import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews";
import styles from "./styles";

const HomeScreen = () => {
  const [textcont, setTextcont] = useState("News");
  const [counter, setCounter] = useState(0);

  function changeText() {
    setTextcont("Next News");
    setCounter((prevValue) => prevValue + 1);
  }

  return (
    <View >
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
