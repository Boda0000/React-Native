import { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductTab from "../../components/ProductTab/ProductTab";
import { useProducts } from "../../Hooks/useProducts";
import { useCategories } from "src/Hooks/useCategory";
import { colors } from "src/assets/colors/colors";
import i18n from "src/locales/i18n";

const ProductsScreen = () => {
  const { data: categories } = useCategories();

  const tabs =
    categories?.map((cat) => ({
      key: cat.id,
      label: cat.name,
      endpoint: cat.action_endpoint,
      image_url: cat.image_url,
    })) || [];

  const [activeTab, setActiveTab] = useState<any>(null);

  useEffect(() => {
    if (categories && categories.length > 0 && !activeTab) {
      console.log("Setting default active tab to:", categories[0].name);
      setActiveTab({
        key: categories[0].id,
        label: categories[0].name,
        endpoint: categories[0].action_endpoint,
        hasImage: true,
      });
    }
  }, [categories, activeTab]);

  const {
    data: products,
    isLoading: productsLoading,
    error,
  } = useProducts(activeTab?.endpoint);

  const handleTabPress = (key: string) => {
    const tab = tabs.find((t) => t.key === key);
    if (tab) setActiveTab(tab);
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
            activeTab={activeTab?.key}
            item={{
              key: item.key,
              label: item.label,
              endpoint: item.endpoint,
              hasImage: !!item.image_url,
              icon: item.image_url,
            }}
            onPress={handleTabPress}
          />
        )}
      />

      {/* Header */}
      <Text style={styles.header}>{i18n.t("Products")}</Text>

      {/* Products */}
      {!productsLoading && !error && products && (
        <FlatList
          data={products}
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
      )}
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
  header: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "700",
    color: colors.neutral800,
    fontFamily: "IBMPlexSansArabic-Bold",
  },
});
