import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import SAR from "../../assets/icons/SAR.svg";
import Calender from "../../assets/icons/Calender.svg";
import { Ionicons } from "@expo/vector-icons";
import i18n from "src/locales/i18n";
import { colors } from "../../assets/colors/colors";
import OrderTab from "../../components/OrderTab/OrderTab";
import { observer } from "mobx-react-lite";
import { orderStore } from "../../stores/OrderStore";

const orderTabs = [
  { key: "all", label: "الطلبات السابقة" },
  { key: "received", label: "الطلبات الحالية" },
];

const formatDate = (timestamp: number) => {
  const d = new Date(timestamp * 1000);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

const OrdersScreen = () => {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    orderStore.loadOrders();
  }, []);

  const filteredOrders = orderStore.orders.filter((o) => {
    if (activeTab === "all") {
      return o.status_name === "مستلم";
    } else if (activeTab === "received") {
      return o.status_name === "جارى التحضير" || o.status_name === "يحضر";
    }
    return false;
  });

  const OrderCard = ({ item }) => {
    const isCurrent =
      item.status_name === "جارى التحضير" || item.status_name === "يحضر";

    if (isCurrent) {
      return (
        <View style={currentStyles.container}>
          <View style={currentStyles.headerRow}>
            <Text style={currentStyles.orderNumber}>
              رقم الطلب{item.order_number}
            </Text>
            <View style={currentStyles.priceRow}>
              <Text style={currentStyles.price}>{item.total_price}</Text>
              <SAR width={20} height={17} />
            </View>
          </View>

          <View style={currentStyles.subRow}>
            <View style={currentStyles.statusTag}>
              <Text style={currentStyles.statusText}>{item.status_name}</Text>
            </View>

            <View style={currentStyles.timeRow}>
              <Calender width={13} height={13} />
              <Text style={currentStyles.timeText}>
                {formatDate(item.order_date)}
              </Text>
            </View>
          </View>

          <View style={currentStyles.actionsRow}>
            <TouchableOpacity style={currentStyles.deleteBtn}>
              <Ionicons name="trash" size={22} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={currentStyles.editBtn}>
              <Text style={currentStyles.editText}>تعديل</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.card1}>
        <View style={styles.h1}>
          <Text style={styles.orderNumber}>
            {i18n.t("ordernumber")} {item.order_number}
          </Text>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.total_price}</Text>
            <SAR width={20} height={17} />
          </View>
        </View>

        <View style={styles.h2}>
          <Text
            style={[
              styles.statusText,
              {
                color: colors.primary500,
                borderColor: colors.primary500,
              },
            ]}
          >
            {item.status_name}
          </Text>

          <View style={styles.dateContainer}>
            <Calender width={13} height={13} />
            <Text style={styles.date}>{formatDate(item.order_date)}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container1}>
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

export default observer(OrdersScreen);

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

const currentStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardLight,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#BEDBDE",
    borderRadius: 14,
    width: "95%",
    alignSelf: "center",
    marginVertical: 10,
  },

  headerRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },

  orderNumber: {
    fontSize: 16,
    fontWeight: "500",
    color: "#385052",
    fontFamily: "IBMPlexSansArabic-Medium",
  },

  priceRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },

  price: {
    color: colors.primary500,
    fontWeight: "700",
    fontSize: 14,
    fontFamily: "IBMPlexSansArabic-Bold",
  },

  subRow: {
    marginTop: 6,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },

  statusTag: {
    backgroundColor: "#FFFFFF66",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFBD67",
  },

  statusText: {
    color: "#E8A300",
    fontWeight: "700",
    fontSize: 14,
    fontFamily: "IBMPlexSansArabic-Bold",
  },

  timeRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 4,
  },

  timeText: {
    fontSize: 12,
    color: "#385052",
    fontFamily: "IBM Plex Sans Arabic",
  },

  actionsRow: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  deleteBtn: {
    backgroundColor: "#CE0043",
    padding: 14,
    borderRadius: 14,
  },

  editBtn: {
    backgroundColor: "#3A5254",
    flex: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  editText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "IBMPlexSansArabic-Bold",
  },
});
