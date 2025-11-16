import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SAR from "../../assets/icons/SAR.svg";
import CustomButton from "../btn/CustomButton";
import { colors } from "src/assets/colors/colors";

interface ProductCardProps {
  item: any;
  onIncrease: () => void;
  onDecrease: () => void;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  item,
  onIncrease,
  onDecrease,
  onAddToCart,
}) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      {/* Title + Price on same row */}
      <View style={styles.contentRow}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.row}>
          <SAR width={15} height={15} />
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>

      {/* Controls with border top */}
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
          <CustomButton
            onPress={onIncrease}
            buttonStyle={styles.countBtn}
            icon={<Ionicons name="add" size={10} color={colors.neutral800} />}
          />
          <Text style={styles.count}>{item.count}</Text>
          <CustomButton
            onPress={onDecrease}
            buttonStyle={styles.countBtn}
            icon={
              <Ionicons name="remove" size={10} color={colors.neutral800} />
            }
          />
        </View>
      </View>
    </View>
  );
};

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
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomEndRadius: 14,
    borderBottomStartRadius: 14,
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
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },

  countBtn: {
    backgroundColor: colors.neutral100,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },

  count: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
