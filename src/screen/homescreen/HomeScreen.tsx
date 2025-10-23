import React, { useTransition } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useGetPackage } from "../../Hooks/useHome";
import styles from "./styles";
import Header from "../../components/Header/Header";
import { AllPackage } from "../../models/HomeModel";
import CustomButton from "src/components/btn/CustomButton";
import Sessions from "../../assets/icons/Sessions.svg";
import SessionTime from "../../assets/icons/SessionTime.svg";
import Duration from "../../assets/icons/Duration.svg";
import { useLanguage } from "src/Hooks/useLanguage";
import i18n from "src/locales/i18n";
import { I18nManager } from "react-native";

const isRTL = I18nManager.isRTL;

const HomeScreen = () => {
  const { data } = useGetPackage();
  const packages = data || [];
  const { lang, toggleLanguage } = useLanguage();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.card}>
        <Text style={styles.textcard}>{i18n.t("book_session")}</Text>
        <TouchableOpacity style={styles.buttoncard}>
          <Text style={styles.buttonTextcard}>{i18n.t("register_now")}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.middlesec}>
        <Text style={styles.text1}>{i18n.t("pakcages")}</Text>
        <Text style={styles.text2}>{i18n.t("all_pakcages")}</Text>
      </View>

      <FlatList
        data={packages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PackageCard pkg={item} />}
      />
    </View>
  );
};

const PackageCard = ({ pkg }: { pkg: AllPackage }) => (
  <View style={styles.pckcont}>
    {/* Main Name */}
    <Text style={styles.pckName}>{pkg.title}</Text>

    <View style={styles.pckDetails}>
      {/* sessions count */}
      <View style={styles.Sessions}>
        <Text style={styles.SessionsText}>
          {" "}
          {i18n.t("session_count")} ({pkg.sessions_count} {i18n.t("sessions")})
        </Text>
        <Sessions width={16} height={16} />
      </View>

      {/* SessionTime */}

      <View style={styles.SessionTime}>
        <Text style={styles.SessionTimeText}>
          {" "}
          {i18n.t("sessionTime")} {pkg.session_time_in_minutes}
        </Text>

        <SessionTime width={16} height={16} />
      </View>
    </View>

    {/* Duration in months */}

    <View style={styles.Duration}>
      <Duration width={16} height={16} />

      <Text style={styles.DurationText}>
        {" "}
        {i18n.t("Duration")} {pkg.duration_months} {i18n.t("Months")}
      </Text>
    </View>

    {/* price */}

    <View style={styles.packagePrice}>
      <Text style={styles.packagePrice}>{i18n.t("price")} {pkg.package_price}</Text>
      <Text style={styles.taxincluded}> {pkg.tax_included} </Text>
    </View>

    {/* Button */}
    <CustomButton title={i18n.t("book_monthly_package")} onPress={() => {}} />
  </View>
);
export default HomeScreen;