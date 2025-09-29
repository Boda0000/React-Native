import { View, Text, ImageBackground, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import axios from "axios";

export default function MainNews() {
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    getTopNews();
  }, []);

  function getTopNews() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd1d9d70f9df43b0ae2a705ce653671a";

    axios
      .get(url)
      .then((res) => {
        const articles = res.data?.articles || [];
        setTopNews(articles);
      })
     
  }

  function renderNews(item) {
    return (
      <ImageBackground
        source={{ uri: item.urlToImage }}
        style={styles.container}
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

  return (
    <View>
      <FlatList
        data={topNews}
        renderItem={({ item }) => renderNews(item)}
        keyExtractor={(item, index) => item.url || index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}
