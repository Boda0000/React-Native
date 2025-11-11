import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
import SAR from "../../assets/icons/SAR.svg";
import Calender from "../../assets/icons/Calender.svg";
import i18n from "src/locales/i18n";

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

const OrderCard = ({ item }: { item: Order }) => {
  const isReceived = item.status === i18n.t("Received");

  return (
    <View style={styles.card1}>
      <View style={styles.h1}>
        <Text style={styles.orderNumber}>
          {i18n.t("ordernumber")}
          {item.ordernumber}
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
            { color: isReceived ? "#289CA5" : "#CE0043" },
            { borderColor: isReceived ? "#289CA5" : "#CE0043" },
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

const OrdersScreen = () => {
  return (
    <View style={styles.container1}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 15,
    paddingTop: Platform.OS === "android" ? 50 : 80,
  },

  card1: {
    backgroundColor: "#DCF1F3",
    borderRadius: 14,
    marginHorizontal: 9,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    height: 100,
    borderWidth: 1,
    borderColor: "#BEDBDE",

    shadowColor: "#DCEBEC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,

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
    color: "#385052",
    marginTop: 2,
    fontWeight: "500",
    fontFamily: "IBMPlexSansArabic-Medium",
  },

  priceContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },

  price: {
    color: "#289CA5",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "right",
    fontFamily: "IBM Plex Sans Arabic",
  },

  dateContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 4,
  },

  date: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "IBMPlexSansArabic-Medium",
    color: "#385052",
  },

  statusText: {
    fontWeight: "700",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#289CA5",
    borderRadius: 8,
    fontFamily: "IBMPlexSansArabic-Bold",
    backgroundColor: "#FFFFFF66",
    padding: 7,
  },
});

export default OrdersScreen;
