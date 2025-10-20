import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useHome } from "../../Hooks/useHome";
import styles from "./styles";
import Header from "../../components/Header/Header";
import { CoursePackage } from "../../models/HomeModel";
import CustomButton from "src/components/btn/CustomButton";


const PackageCard = ({ pkg }: { pkg: CoursePackage }) => (
  <View style={styles.pckcont}>
    <Text style={styles.pckName}>{pkg.title}</Text>
    <Text style={styles.pckdes}>{pkg.package_price} EGP</Text>
    <Text>Duration: {pkg.duration_months} months</Text>
    <Text>
      Sessions: {pkg.sessions_count} ({pkg.sessions_type})
    </Text>

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
