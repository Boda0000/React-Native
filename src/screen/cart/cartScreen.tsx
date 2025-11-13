import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
import CartItem from "../../components/Cart/Cart";
import CustomButton from "../../components/btn/CustomButton";
import i18n from "src/locales/i18n";
import SAR from "../../assets/icons/SAR.svg";
import SAR2 from "../../assets/icons/SAR2.svg";
import PopupModal from "../../components/modal/PopUp";
import BottomSheetModal from "../../components/modal/BottomSheetModal";
import { colors } from "src/assets/colors/colors";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: i18n.t("Orange juice"),
      price: 18,
      quantity: 1,
      image: require("../../assets/images/orangejuice.png"),
    },
  ]);

  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);

  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDeletePress = (id: number) => {
    setSelectedItemId(id);
    setPopupVisible(true);
  };

  const handleConfirmDelete = () => {
    if (selectedItemId !== null) {
      setCartItems((prev) => prev.filter((item) => item.id !== selectedItemId));
    }
    setSelectedItemId(null);
    setPopupVisible(false);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onDelete={handleDeletePress}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>{i18n.t("Total")}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SAR width={20} height={17} />
            <Text style={styles.totalValue}>{total}</Text>
          </View>
        </View>

        <CustomButton
          title={`${i18n.t("Continue payment")} ${total}`}
          iconLeft={<SAR2 width={15} height={15} />}
          onPress={() => setPaymentModalVisible(true)}
          buttonStyle={styles.checkoutBtn}
          textStyle={styles.checkoutText}
        />
      </View>

     
      <PopupModal
        visible={isPopupVisible}
        onClose={() => setPopupVisible(false)}
        onConfirmDelete={handleConfirmDelete}
      />

      <BottomSheetModal
        visible={isPaymentModalVisible}
        onClose={() => setPaymentModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral100,
    padding: 16,
    paddingTop: Platform.OS === "android" ? 50 : 80,
  },
  footer: { paddingBottom: 16 },
  totalRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 16,
    color: colors.neutral800,
    fontFamily: "IBMPlexSansArabic-Medium",
    fontWeight: "500",
  },
  totalValue: {
    fontSize: 14,
    color: "#1E7B85",
    fontWeight: "700",
    fontFamily: "IBMPlexSansArabic-Bold",
  },
  checkoutBtn: {
    backgroundColor: colors.primary500,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  checkoutText: {
    color: colors.neutral100,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "IBMPlexSansArabic-Bold",
  },
});

export default CartScreen;
