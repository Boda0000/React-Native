import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import ProductCard from "../../components/ProductCard/ProductCard";
import { colors } from "src/assets/colors/colors";
import i18n from "src/locales/i18n";

interface Product {
  id: number;
  title: string;
  price: number;
  count: number;
  image: any;
}

const ProductsScreen = () => {
  const [activeTab, setActiveTab] = useState<"juices" | "fast">("juices");

  const tabs = [
    {
      key: "juices",
      label: i18n.t("juices"),
      icon: require("../../assets/images/Ellips.png"),
      hasImage: true,
    },
    {
      key: "fast",
      label: i18n.t("fastfood"),
      hasImage: false,
    },
  ];

  const juices = [
    {
      id: 1,
      title: i18n.t("Strawberry juice"),
      price: 16,
      count: 0,
      image: require("../../assets/images/222222.png"),
    },
    {
      id: 2,
      title: i18n.t("Orange juice"),
      price: 18,
      count: 0,
      image: require("../../assets/images/orangejuice.png"),
    },
    {
      id: 3,
      title: i18n.t("Lemon juice"),
      price: 10,
      count: 0,
      image: require("../../assets/images/rfsfs.png"),
    },
    {
      id: 4,
      title: i18n.t("Cantaloupe juice"),
      price: 24,
      count: 0,
      image: require("../../assets/images/rrrrrr.png"),
    },
  ];

  const fastMeals = [
    {
      id: 5,
      title: i18n.t("Burger"),
      price: 40,
      count: 0,
      image: require("../../assets/images/burger.jpg"),
    },
    {
      id: 6,
      title: i18n.t("Pizaa"),
      price: 60,
      count: 0,
      image: require("../../assets/images/pizza.jpg"),
    },
  ];

  const [products, setProducts] = useState<Product[]>(juices);

  const updateCount = (id: number, delta: number) =>
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: Math.max(0, p.count + delta) } : p
      )
    );

  const handleTabPress = (key: "juices" | "fast") => {
    setActiveTab(key);
    setProducts(key === "juices" ? juices : fastMeals);
  };

  const renderTab = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => handleTabPress(item.key)}
      style={[styles.tab, activeTab === item.key && styles.activeTab]}
    >
      <Text
        style={[styles.tabText, activeTab === item.key && styles.activeText]}
      >
        {item.label}
      </Text>

      {item.hasImage ? (
        <View style={styles.circleImage}>
          <Image source={item.icon} style={styles.imageInsideCircle} />
        </View>
      ) : (
        <View style={styles.circle} />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <FlatList
        data={tabs}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row-reverse",
          paddingBottom: 8,
        }}
        style={{ maxHeight: 80 }}
        renderItem={renderTab}
      />

      {/* Header */}
      <Text style={styles.header}>{i18n.t("Products")}</Text>

      {/* Products */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingTop: 10 }}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onIncrease={() => updateCount(item.id, +1)}
            onDecrease={() => updateCount(item.id, -1)}
            onAddToCart={() => console.log("Add:", item.id)}
          />
        )}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? 50 : 80,
  },

  tab: {
    flexDirection: "row",
    width: 160,
    height: 50,
    borderRadius: 23,
    backgroundColor: colors.cardLight,
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: 12,
    elevation: 3,
    gap: 10,
  },

  activeTab: {
    backgroundColor: colors.neutral800,
    elevation: 6,
  },

  tabText: {
    fontSize: 18,
    color: colors.neutral800,
    fontFamily: "IBMPlexSansArabic-Medium",
  },

  activeText: {
    color: colors.white,
    fontFamily: "IBMPlexSansArabic-Bold",
  },

  circle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: colors.circle,
  },

  circleImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    overflow: "hidden",
  },

  imageInsideCircle: {
    width: "100%",
    height: "100%",
  },

  header: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "700",
    color: colors.neutral800,
    fontFamily: "IBMPlexSansArabic-Bold",
  },
});
