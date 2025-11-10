import { View, Text, FlatList } from "react-native";
import styles from "./styles";

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
    status: "تم الاستلام",
  },
  {
    id: "2",
    ordernumber: "6526851",
    price: 29,
    date: "24/12/2024",
    status: "تم الاستلام",
  },
  {
    id: "3",
    ordernumber: "6526851",
    price: 29,
    date: "24/12/2024",
    status: "تم الاستلام",
  },
  {
    id: "4",
    ordernumber: "6526851",
    price: 18,
    date: "23/12/2024",
    status: "ملغي",
  },
  {
    id: "5",
    ordernumber: "6526851",
    price: 18,
    date: "23/12/2024",
    status: "ملغي",
  },
];

const OrderCard = ({ item }: { item: Order }) => {
  const isReceived = item.status === "تم الاستلام";

  return (
    <View style={styles.card1}>
      <View style={styles.h1}>
        <Text style={styles.orderNumber}>رقم الطلب #{item.ordernumber}</Text>
        <Text style={styles.price}>{item.price} ر.س</Text>
      </View>

      <View style={styles.h2}>
        <Text
          style={[
            styles.statusText,
            { color: isReceived ? "#00A86B" : "#D1003F" },
          ]}
        >
          {item.status}
        </Text>

        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
};

export default function OrdersScreen() {
  return (
    <View style={styles.container1}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard item={item} />}
      />
    </View>
  );
}
