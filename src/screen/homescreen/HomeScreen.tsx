import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews";
import styles from "./styles";
import { getUser } from "../../storage/storageService"; 

const HomeScreen = () => {
  const [textcont, setTextcont] = useState("News");
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState(""); 

  function changeText() {
    setTextcont("Next News");
    setCounter((prevValue) => prevValue + 1);
  }

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      if (user) {
        setUserName(user.name);
      }
    };
    loadUser();
  }, []);

  return (
    <View>
      <Header />
      <MainNews />
      <View style={styles.content}>
        {userName !== "" && <Text style={styles.text}>Welcome,{userName}</Text>}
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
