import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  I18nManager,
} from "react-native";
import { usePackage } from "../../Hooks/usePackage";
import styles from "./styles";
import Header from "../../components/Header/Header";
import { AllPackage } from "../../models/HomeModel";
import CustomButton from "src/components/btn/CustomButton";
import Sessions from "../../assets/icons/Sessions.svg";
import SessionTime from "../../assets/icons/SessionTime.svg";
import Duration from "../../assets/icons/Duration.svg";
import { useLanguage } from "src/Hooks/useLanguage";
import i18n from "src/locales/i18n";

const isRTL = I18nManager.isRTL;

const HomeScreen = () => {
  const { data: packages, refetch, isLoading, isRefetching } = usePackage();

  const { lang } = useLanguage();

  if (isLoading) {
    return (
      <View style={styles.Loading}>
        <ActivityIndicator size="large" color="#4A90E2" />
        <Text style={styles.LoadingText}>{i18n.t("loading")}...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.banner}>
        <Text style={styles.bannerTxt}>{i18n.t("book_session")}</Text>
        <CustomButton
          buttonStyle={styles.bannerbtn}
          title={i18n.t("register_now")}
          textStyle={styles.bannerbtnText}
          onPress={() => {}}
        />
      </View>

      <View style={styles.midsec}>
        <Text style={styles.packages}>{i18n.t("packages")}</Text>
        <Text style={styles.all_packages}>{i18n.t("all_packages")}</Text>
      </View>

      <FlatList
        data={packages}
        renderItem={({ item }) => <PackageCard pkg={item} />}
        refreshing={isRefetching}
        onRefresh={refetch}
        ListEmptyComponent={
          <View style={styles.ListEmpty}>
            <Text style={styles.NoData}>{i18n.t("no_data_found")}</Text>
          </View>
        }
      />
    </View>
  );
};

const PackageCard = ({ pkg }: { pkg: AllPackage }) => (
  <View style={styles.Pkgcontainer}>
    {/* Main Name */}
    <Text style={styles.PkgName}>{pkg.title}</Text>

    <View style={styles.pkgDetails}>
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
      <Text style={styles.packagePrice}>
        {i18n.t("price")} {pkg.package_price}
      </Text>
      <Text style={styles.taxincluded}> {i18n.t("tax_included")} </Text>
    </View>

    {/* Button */}
    <CustomButton
      title={i18n.t("book_monthly_package")}
      textStyle={styles.book_monthly_package}
      onPress={() => {}}
    />
  </View>
);
export default HomeScreen;