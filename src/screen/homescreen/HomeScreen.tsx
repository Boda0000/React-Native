import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useHome } from "../../Hooks/useHome";
import styles from "./styles";
import Header from "../../components/Header/Header";
import { AllPackage } from "../../models/HomeModel";
import CustomButton from "src/components/btn/CustomButton";
import Sessions from "../../assets/icons/Sessions.svg";
import Calendar from "../../assets/icons/calendar.svg";

const PackageCard = ({ pkg }: { pkg: AllPackage }) => (
  <View style={styles.pckcont}>
    <Text style={styles.pckName}>{pkg.title}</Text>

    <View style={styles.Calendar}>
      <Calendar width={16} height={16} />

      <Text style={styles.Calendar}>
        Duration: {pkg.duration_months} months
      </Text>
    </View>

    <View style={styles.Sessions}>
      <Sessions width={16} height={16} />

      <Text style={styles.Sessions}>
        Sessions: {pkg.sessions_count} ({pkg.sessions_type}){" "}
      </Text>
    </View>
    <View style={styles.packagePrice}>
      <Text style={styles.packagePrice}> السعر:{pkg.package_price}</Text>
    </View>
    <CustomButton title="احجز باقة شهرية" onPress={() => {}} />
  </View>
);

const HomeScreen = () => {
  const { data } = useHome();
  const packages = data || [];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.card}>
        <Text style={styles.textcard}>احجز حصص فردية أونلاين و حضورية</Text>
        <TouchableOpacity style={styles.buttoncard}>
          <Text style={styles.buttonTextcard}>سجل الآن</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.middlesec}>
        <Text style={styles.text1}>الباقات</Text>
        <Text style={styles.text2}>كل الباقات</Text>
      </View>

      <FlatList
        data={packages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PackageCard pkg={item} />}
      />
    </View>
  );
};

export default HomeScreen;
