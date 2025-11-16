import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import ProductCard from "../../components/ProductCard/ProductCard";
import CustomButton from "src/components/btn/CustomButton";
import { colors } from "src/assets/colors/colors";

interface Product {
  id: number;
  title: string;
  price: number;
  count: number;
  image: any;
}

const ProductsScreen = () => {
  const [activeTab, setActiveTab] = useState<"juices" | "fast">("juices");

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "عصير فراولة",
      price: 16,
      count: 0,
      image: require("../../assets/images/222222.png"),
    },
    {
      id: 2,
      title: "عصير برتقال",
      price: 18,
      count: 0,
      image: require("../../assets/images/orangejuice.png"),
    },
    {
      id: 3,
      title: "عصير ليمون",
      price: 10,
      count: 2,
      image: require("../../assets/images/rfsfs.png"),
    },
    {
      id: 4,
      title: "عصير كانتالوب",
      price: 24,
      count: 0,
      image: require("../../assets/images/rrrrrr.png"),
    },
  ]);

  const increase = (id: number) =>
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p))
    );

  const decrease = (id: number) =>
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.count > 0 ? { ...p, count: p.count - 1 } : p
      )
    );

  const addToCart = (id: number) => {
    console.log("Added to cart:", id);
  };

  const renderItem = ({ item }: { item: Product }) => (
    <ProductCard
      item={item}
      onIncrease={() => increase(item.id)}
      onDecrease={() => decrease(item.id)}
      onAddToCart={() => addToCart(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabs}>
        <CustomButton
          title="العصائر"
          iconRight={
            <Image
              source={require("../../assets/images/Ellips.png")}
              style={{ width: 20, height: 20 }}
            />
          }
          onPress={() => setActiveTab("juices")}
          buttonStyle={[
            styles.tab,
            activeTab === "juices" ? styles.activeTab : undefined,
          ]}
          textStyle={[
            styles.tabText,
            activeTab === "juices" ? styles.activeText : undefined,
          ]}
        />
        <CustomButton
          title="وجبات سريعة"
          onPress={() => setActiveTab("fast")}
          buttonStyle={[
            styles.tab,
            activeTab === "fast" ? styles.activeTab : undefined,
          ]}
          textStyle={[
            styles.tabText,
            activeTab === "fast" ? styles.activeText : undefined,
          ]}
        />
      </View>

      <Text style={styles.header}>المنتجات</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingTop: 10 }}
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
  tabs: {
    flexDirection: "row-reverse",
    marginBottom: 15,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: colors.cardLight,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: colors.activetab,
    shadowColor: colors.shadow2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  tabText: {
    fontSize: 16,
    color: colors.neutral700,
    fontWeight: "500",
    fontFamily: "IBMPlexSansArabic-Medium",
  },
  activeText: {
    color: colors.cardLight,
    fontWeight: "700",
    fontFamily: "IBMPlexSansArabic-Bold",
    fontSize: 16,
  },
  header: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: colors.neutral800,
    fontFamily: "IBMPlexSansArabic-Bold",
  },
});
