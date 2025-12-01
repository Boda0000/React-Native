import { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
import { observer } from "mobx-react-lite";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductTab from "../../components/ProductTab/ProductTab";
import { canteenStore } from "../../stores/CanteenStore";
import { colors } from "src/assets/colors/colors";
import i18n from "src/locales/i18n";

const ProductsScreen = observer(() => {
  const tabs = canteenStore.tabs;
  const activeCategory = canteenStore.activeCategory;

  useEffect(() => {
    canteenStore.loadCategories();
  }, []);

  const handleTabPress = (key: string) => {
    const cat = canteenStore.categories.find((c) => c.id === key);

    if (cat) {
      canteenStore.setActiveCategory(cat);

      canteenStore.loadProducts(cat.actions[0]?.endpoint_url);
    }
  };

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
        renderItem={({ item }) => (
          <ProductTab
            activeTab={activeCategory?.id}
            item={{
              key: item.key,
              label: item.label,
              endpoint: item.endpoint,
              hasImage: item.hasImage,
              icon: item.image_url,
            }}
            onPress={handleTabPress}
          />
        )}
      />

      {/* Header */}
      <Text style={styles.header}>{i18n.t("Products")}</Text>

      {/* Products */}
      <FlatList
        data={canteenStore.products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          flexDirection: "row-reverse",
        }}
        contentContainerStyle={{ paddingTop: 10 }}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onAddToCart={() => console.log("Add to cart:", item.id)}
          />
        )}
      />
    </View>
  );
});

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? 50 : 80,
  },
  header: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "700",
    color: colors.neutral800,
    fontFamily: "IBMPlexSansArabic-Bold",
  },
});
