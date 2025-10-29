import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  Image,
} from "react-native";
import { usePackage } from "../../Hooks/usePackage";
import { useInstructors } from "../../Hooks/useinstructors";
import styles from "./styles";
import Header from "../../components/Header/Header";
import { AllPackage } from "../../models/PackageModel";
import { Instructor } from "../../models/InstructorsModel";
import CustomButton from "src/components/btn/CustomButton";
import Sessions from "../../assets/icons/Sessions.svg";
import SessionTime from "../../assets/icons/SessionTime.svg";
import Duration from "../../assets/icons/Duration.svg";
import i18n from "src/locales/i18n";
import Location from "../../assets/icons/location.svg";
import Country from "../../assets/icons/country.svg";
import Star from "../../assets/icons/Star.svg";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import SelectImageCard from "src/components/SelectImageCard/SelectImageCard";

const HomeScreen = () => {
  const { data: packages, refetch, isLoading, isRefetching } = usePackage();
  const {
    data: instructors,
    isLoading: loadingInstructors,
    refetch: refetchInstructors,
  } = useInstructors();

  if (isLoading || loadingInstructors) {
    return (
      <View style={styles.Loading}>
        <ActivityIndicator size="large" color="#4A90E2" />
        <Text style={styles.LoadingText}>{i18n.t("loading")}...</Text>
      </View>
    );
  }

  const firstPackage = packages?.[0];

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 5,
        backgroundColor: "#FFFFFF",
      }}
      refreshControl={
        <RefreshControl
          refreshing={isRefetching || loadingInstructors}
          onRefresh={() => {
            refetch();
            refetchInstructors();
          }}
        />
      }
    >
      {/* Header */}
      <Header />

      {/* photo*/}
      <SelectImageCard />

      {/* Packages */}
      {firstPackage && (
        <View>
          <View style={styles.midsec}>
            <Text style={styles.packages}>{i18n.t("packages")}</Text>
            <Text style={styles.all_packages}>{i18n.t("all_packages")}</Text>
          </View>

          <PackageCard pkg={firstPackage} />
        </View>
      )}

      {/* Instructors */}
      <FlatList
        data={instructors}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <InstructorCard instructor={item} />}
        ListHeaderComponent={
          <View style={styles.lowsec}>
            <Text style={styles.instructors}>{i18n.t("Instructor")}</Text>
            <Text style={styles.all_instructors}>
              {i18n.t("all_instructors")}
            </Text>
          </View>
        }
        contentContainerStyle={{
          paddingBottom: 50,
          paddingHorizontal: 5,
          backgroundColor: "#FFFFFF",
        }}
      />
    </ScrollView>
  );
};

// PackageCard

const PackageCard = ({ pkg }: { pkg: AllPackage }) => (
  <View style={styles.Pkgcontainer}>
    {/* Main Name */}
    <Text style={styles.PkgName}>{pkg.title}</Text>

    <View style={styles.pkgDetails}>
      {/* sessions count */}
      <View style={styles.Sessions}>
        <Text style={styles.SessionsText}>
          {i18n.t("session_count")} ({pkg.sessions_count} {i18n.t("sessions")})
        </Text>
        <Sessions width={16} height={16} />
      </View>
      {/* SessionTime */}
      <View style={styles.SessionTime}>
        <Text style={styles.SessionTimeText}>
          {i18n.t("sessionTime")} {pkg.session_time_in_minutes}
        </Text>
        <SessionTime width={16} height={16} />
      </View>
    </View>
    {/* Duration in months */}
    <View style={styles.Duration}>
      <Duration width={16} height={16} />
      <Text style={styles.DurationText}>
        {i18n.t("Duration")} {pkg.duration_months} {i18n.t("Months")}
      </Text>
    </View>
    {/* price */}
    <View style={styles.packagePrice}>
      <Text style={styles.packagePrice}>
        {i18n.t("price")} {pkg.package_price}
      </Text>
      <Text style={styles.taxincluded}>{i18n.t("tax_included")}</Text>
    </View>
    {/* Button */}
    <CustomButton
      title={i18n.t("book_monthly_package")}
      textStyle={styles.book_monthly_package}
      onPress={() => {}}
    />
  </View>
);

// InstructorCard

const InstructorCard = ({ instructor }: { instructor: Instructor }) => (
  <View style={styles.card}>
    {/* Top Section */}
    <View style={styles.topSection}>
      <Image
        source={{ uri: instructor.profile_picture }}
        style={styles.teacherImage}
      />

      <View>
        <Text style={styles.teacherName}>{instructor.name}</Text>
        <View style={styles.ratingRow}>
          <Star width={16} height={16} />
          <Text style={styles.ratingText}>{instructor.average_rating}</Text>
        </View>
      </View>
    </View>

    {/* Subjects */}
    <View>
      {instructor.subjects?.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.subjectContainer}
        >
          {instructor.subjects.map((subject, index) => (
            <View key={index} style={styles.subjectBadge}>
              <Text style={styles.subjectText}>{subject}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>

    {/*Location Info*/}
    <View style={styles.infoRow}>
      <Text style={styles.location}>
        <Location width={10} height={10} />
        {instructor.city_label}, {instructor.country_label}
      </Text>
      <Text style={styles.location}>
        <Country width={10} height={10} /> {instructor.nationality_label}
      </Text>
    </View>

    {/*Button*/}
    <View>
      <CustomButton
        title={i18n.t("book class")}
        textStyle={styles.bookBtnText}
        buttonStyle={styles.bookBtn}
        onPress={() => {}}
      />
    </View>
  </View>
);

export default HomeScreen;
