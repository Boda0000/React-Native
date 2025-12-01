import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { colors } from "src/assets/colors/colors";

interface TabItem {
  key: string;
  label: string;
  icon?: any;
  endpoint?: string;
}

interface OrderTabProps {
  item: TabItem;
  activeTab: string | null;
  onPress: (key: string) => void;
}

const OrderTab: React.FC<OrderTabProps> = ({
  item,
  activeTab,
  onPress,
}) => {
  item.label;
  return (
    <TouchableOpacity
      onPress={() => onPress(item.key)}
      style={[styles.tab, activeTab === item.key && styles.activeTab]}
    >
      <Text
        style={[styles.tabText, activeTab === item.key && styles.activeText]}
      >
        {item.label}
      </Text>

      
    </TouchableOpacity>
  );
};

export default OrderTab;

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    width: 160,
    height: 50,
    borderRadius: 23,
    backgroundColor: colors.cardLight,
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: 12,
    elevation: 3,
    gap: 10,
  },

  activeTab: {
    backgroundColor: colors.neutral800,
    elevation: 6,
  },

  tabText: {
    fontSize: 18,
    color: colors.neutral800,
    fontFamily: "IBMPlexSansArabic-Medium",
  },

  activeText: {
    color: colors.white,
    fontFamily: "IBMPlexSansArabic-Bold",
  },

  circle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: colors.circle,
  },

  circleImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    overflow: "hidden",
  },

  imageInsideCircle: {
    width: "100%",
    height: "100%",
  },
});
