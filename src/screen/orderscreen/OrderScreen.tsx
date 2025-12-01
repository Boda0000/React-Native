import { useState } from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
import SAR from "../../assets/icons/SAR.svg";
import Calender from "../../assets/icons/Calender.svg";
import i18n from "src/locales/i18n";
import { colors } from "../../assets/colors/colors";
import OrderTab from "../../components/OrderTab/OrderTab";

type Order = {
  id: string;
  ordernumber: string;
  price: number;
  date: string;
  status: string;
};

const orders: Order[] = [
  {
    id: "1",
    ordernumber: "6526851",
    price: 29,
    date: "24/12/2024",
    status: i18n.t("Received"),
  },
  {
    id: "2",
    ordernumber: "6526851",
    price: 29,
    date: "24/12/2024",
    status: i18n.t("Received"),
  },
  {
    id: "3",
    ordernumber: "6526851",
    price: 29,
    date: "24/12/2024",
    status: i18n.t("Received"),
  },
  {
    id: "4",
    ordernumber: "6526851",
    price: 18,
    date: "23/12/2024",
    status: i18n.t("Cancelled"),
  },
  {
    id: "5",
    ordernumber: "6526851",
    price: 18,
    date: "23/12/2024",
    status: i18n.t("Cancelled"),
  },
];

const orderTabs = [
  { key: "all", label: i18n.t("All") },
  { key: "received", label: i18n.t("Received") },
  { key: "cancelled", label: i18n.t("Cancelled") },
];

const OrdersScreen = () => {
  const [activeTab, setActiveTab] = useState("all");

  // FILTER ORDERS BASED ON TAB
  const filteredOrders =
    activeTab === "all"
      ? orders
      : orders.filter((o) =>
          activeTab === "received"
            ? o.status === i18n.t("Received")
            : o.status === i18n.t("Cancelled")
        );

  const OrderCard = ({ item }: { item: Order }) => {
    const isReceived = item.status === i18n.t("Received");

    return (
      <View style={styles.card1}>
        <View style={styles.h1}>
          <Text style={styles.orderNumber}>
            {i18n.t("ordernumber")} {item.ordernumber}
          </Text>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <SAR width={20} height={17} />
          </View>
        </View>

        <View style={styles.h2}>
          <Text
            style={[
              styles.statusText,
              { color: isReceived ? colors.primary500 : colors.error500 },
              { borderColor: isReceived ? colors.primary500 : colors.error500 },
            ]}
          >
            {item.status}
          </Text>

          <View style={styles.dateContainer}>
            <Calender width={13} height={13} />
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container1}>
      {/* ✔ Tabs Section using FlatList */}
      <FlatList
        data={orderTabs}
        horizontal
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <OrderTab
            item={item}
            activeTab={activeTab}
            onPress={(key) => setActiveTab(key)}
          />
        )}
      />

      {/* Orders */}
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard item={item} />}
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: 100,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === "android" ? 50 : 80,
  },

  card1: {
    backgroundColor: colors.cardLight,
    borderRadius: 14,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: colors.borderLight,
    height: 100,
    elevation: 3,
  },

  h1: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },

  h2: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  orderNumber: {
    textAlign: "right",
    fontSize: 16,
    color: colors.text,
    fontWeight: "500",
    fontFamily: "IBMPlexSansArabic-Medium",
  },

  priceContainer: { flexDirection: "row-reverse", alignItems: "center" },

  price: {
    color: colors.primary500,
    fontWeight: "700",
    fontSize: 14,
    fontFamily: "IBM Plex Sans Arabic",
  },

  dateContainer: { flexDirection: "row-reverse", alignItems: "center", gap: 4 },

  date: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "IBMPlexSansArabic-Medium",
    color: colors.text,
  },

  statusText: {
    fontWeight: "700",
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "IBMPlexSansArabic-Bold",
    backgroundColor: colors.neutral150,
    padding: 7,
  },
});

export default OrdersScreen;
