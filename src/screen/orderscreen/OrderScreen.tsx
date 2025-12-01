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
import i18n from "src/locales/i18n";
import { colors } from "../../assets/colors/colors";
import ProductTab from "../../components/ProductTab/ProductTab";



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

const OrdersScreen = () => {
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
              { color: isReceived ? colors.primary500 : colors.error500 },
              {
                borderColor: isReceived ? colors.primary500 : colors.error500,
              },
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
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard item={item} />}
        contentContainerStyle={{
          paddingTop: Platform.OS === "android" ? 100 : 60,
        }}
      />

   

    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,
    paddingTop: Platform.OS === "android" ? 50 : 80,
  },

  card1: {
    backgroundColor: colors.cardLight,
    borderRadius: 14,
    marginHorizontal: 9,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    height: 100,
    borderWidth: 1,
    borderColor: colors.borderLight,

    shadowColor: colors.shadow,
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
    color: colors.text,
    marginTop: 2,
    fontWeight: "500",
    fontFamily: "IBMPlexSansArabic-Medium",
  },

  priceContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },

  price: {
    color: colors.primary500,
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
