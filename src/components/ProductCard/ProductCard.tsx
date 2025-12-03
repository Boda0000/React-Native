import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SAR from "../../assets/icons/SAR.svg";
import CustomButton from "../btn/CustomButton";
import { colors } from "src/assets/colors/colors";
import { Product } from "src/models/ProductModel";
import { observer } from "mobx-react-lite";
import { productStore } from "../../stores/OrderStore";

interface ProductCardProps {
  item: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = observer(({ item, onAddToCart }) => {
  const onIncrease = () => productStore.increaseCount(item.id);
  const onDecrease = () => productStore.decreaseCount(item.id);

  return (
    <View style={styles.card}>
      <Image
        source={typeof item.image.url === "string" ? { uri: item.image.url } : item.image.url}
        style={styles.image}
      />

      <View style={styles.contentRow}>
        <Text style={styles.title}>{item.name}</Text>

        <View style={styles.row}>
          <SAR width={15} height={15} />
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>

      <View style={styles.controls}>
        <CustomButton
          onPress={onAddToCart}
          buttonStyle={styles.cartBtn}
          iconLeft={
            <Image
              source={require("../../assets/images/cart.png")}
              style={{ width: 13, height: 13 }}
            />
          }
        />

        <View style={styles.counter}>
          <TouchableOpacity onPress={onIncrease} style={styles.countBtn}>
            <Ionicons name="add" size={14} color={colors.neutral800} />
          </TouchableOpacity>

          <Text style={styles.count}>{item.count || 0}</Text>

          <TouchableOpacity onPress={onDecrease} style={styles.countBtn}>
            <Ionicons name="remove" size={14} color={colors.neutral800} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

export default ProductCard;




const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: colors.cardLight,
    borderRadius: 14,
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 14,
  },
  contentRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.neutral800,
    fontFamily: "IBMPlexSansArabic-Medium",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    color: colors.primary500,
    fontWeight: "700",
    fontFamily: "IBMPlexSansArabic-Bold",
    fontSize: 14,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderTopWidth: 0,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  cartBtn: {
    backgroundColor: colors.secondry300,
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.neutral150,
    padding: 4,
    borderRadius: 4,
  },
  countBtn: {
    backgroundColor: colors.neutral100,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  count: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
