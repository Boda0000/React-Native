import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../../components/btn/CustomButton";
import { colors } from "src/assets/colors/colors";
import SAR from "../../assets/icons/SAR.svg";

const CartItem = ({ item, onIncrease, onDecrease, onDelete }: any) => (
  <View style={styles.card}>
    <CustomButton
      onPress={() => onDelete(item.id)}
      buttonStyle={styles.deleteBtn}
      iconLeft={<MaterialIcons name="delete" size={16} color="#fff" />}
    />

    <View style={styles.qtyContainer}>
      <CustomButton
        title="+"
        onPress={() => onIncrease(item.id)}
        buttonStyle={styles.qtyBtn}
        textStyle={styles.qtyText}
      ></CustomButton>

      <Text style={styles.qtyNumber}>{item.quantity}</Text>

      <CustomButton
        title="−"
        onPress={() => onDecrease(item.id)}
        buttonStyle={styles.qtyBtn}
        textStyle={styles.qtyText}
      ></CustomButton>
    </View>

    <View style={{ alignItems: "flex-end" }}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <SAR width={20} height={17} />
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>

    <Image source={item.image} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardLight,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.borderLight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },

  deleteBtn: {
    backgroundColor: colors.error500,
    paddingHorizontal: 7,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    backgroundColor: colors.neutral150,
    borderRadius: 4,
    padding: 4,
  },
  qtyBtn: {
    backgroundColor: colors.neutral100,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  qtyText: {
    fontSize: 18,
    color: colors.neutral800,
    textAlign: "center",
  },
  qtyNumber: {
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 4,
    fontFamily: "IBMPlexSansArabic-Medium",
    color: colors.neutral800,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "IBMPlexSansArabic-Medium",
    color: colors.neutral800,
  },
  price: {
    fontSize: 14,
    color: colors.primary500,
    fontWeight: "700",
    fontFamily: "IBMPlexSansArabic-Bold",
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 14,
  },
});

export default CartItem;
