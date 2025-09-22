import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import axios from "axios";

const news = [
  {
    id: 1,
    source: "source 1",
    title: "The James",
    image:
      "https://wallpapers.com/images/featured/4k-galaxy-a3qjl9atd2ku58vt.jpg",
  },
  {
    id: 2,
    source: "source 2",
    title: "2",
    image:
      "https://img.freepik.com/free-photo/starry-clear-sky-view-with-nature-landscape_23-2151683165.jpg?semt=ais_incoming&w=740&q=80",
  },
  {
    id: 3,
    source: "source 3",
    title: "3",
    image:
      "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

export default function MainNews() {
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    getTopNews();
  }, []);

  function getTopNews() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd1d9d70f9df43b0ae2a705ce653671a";
    axios.get(url).then((res) => {
      const articles = res.data?.articles;
      setTopNews(articles);
    });
  }

  function renderNews(item) {
    return (
      <ImageBackground
        source={{
          uri: item.urlToImage,
        }}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.whiteCont}>
          <View style={styles.redcont}>
            <Text style={styles.galaxies}>{item.source?.name}</Text>
          </View>
          <Text style={styles.name}>{item.title}</Text>
        </View>
      </ImageBackground>
    );
  }
  function addArticle() {
    const newArticle = {
      id: 5,
      source: "source 5",
      title: "sssssssss",
      image:
        "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?semt=ais_hybrid&w=740&q=80",
    };
    setTopNews((prevNews) => [...prevNews, newArticle]);
  }

  return (
    <View>
      <FlatList
        data={topNews}
        renderItem={({ item }) => renderNews(item)}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity onPress={addArticle}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
}
