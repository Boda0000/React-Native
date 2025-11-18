import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "src/assets/colors/colors";
import i18n from "src/locales/i18n";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "src/components/btn/CustomButton";
import { useLanguage } from "../../Hooks/useLanguage";

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

const SidebarModal: React.FC<SidebarProps> = ({ visible, onClose }) => {
  const { lang, toggleLanguage } = useLanguage();
  const navigation = useNavigation<any>();
  const MenuItem = ({
    icon,
    text,
    screen,
    action,
  }: {
    icon: string;
    text: string;
    screen?: string;
    action?: () => void;
  }) => (
    <CustomButton
      onPress={() => {
        onClose(); 
        if (screen) navigation.navigate(screen); 
        if (action) action(); 
      }}
      buttonStyle={styles.item}
      textStyle={styles.itemText}
      icon={<Ionicons name={icon as any} size={22} color={colors.neutral800} />}
      title={text}
    />
  );

  const BottomItem = ({
    icon,
    text,
    color,
  }: {
    icon: string;
    text: string;
    color: string;
  }) => (
    <CustomButton
      onPress={() => {}}
      buttonStyle={styles.item}
      textStyle={[styles.itemText, { color }]}
      icon={<Ionicons name={icon as any} size={22} color={color} />}
      title={text}
    />
  );

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <CustomButton buttonStyle={styles.overlay} onPress={onClose} />

      <View style={styles.sidebar}>
        <View>
          <View style={styles.header}>
            <CustomButton
              onPress={onClose}
              buttonStyle={styles.iconOnly}
              icon={
                <Ionicons name="close" size={26} color={colors.neutral800} />
              }
            />
            <View style={styles.headerCenter}>
              <Ionicons name="menu" size={26} color={colors.neutral800} />
              <Text style={styles.title}>{i18n.t("Menu")}</Text>
            </View>
          </View>

          <View style={styles.menu}>
            <MenuItem
              icon="notifications-outline"
              text={i18n.t("Notifications")}
            />

            <MenuItem
              icon="globe-outline"
              text={lang === "en" ? "العربية" : "English"}
              action={toggleLanguage}
            />

            <MenuItem icon="cart" text={i18n.t("Cart")} screen="CartScreen" />
            <MenuItem
              icon="list-circle-outline"
              text={i18n.t("Products")}
              screen="ProductsScreen"
            />
          </View>
        </View>

        <View style={styles.bottomsidebar}>
          <View style={styles.divider} />
          <BottomItem
            icon="log-out-outline"
            text={i18n.t("Log out")}
            color={colors.error500}
          />
          <BottomItem
            icon="person-remove-outline"
            text={i18n.t("Delete account")}
            color={colors.sidebardelete}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SidebarModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: "80%",
    backgroundColor: colors.white,
    paddingTop: 50,
    paddingHorizontal: 20,
    borderTopLeftRadius: 40,
    marginTop: 60,
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  headerCenter: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8,
  },
  iconOnly: {
    backgroundColor: "transparent",
    padding: 5,
    elevation: 0,
  },
  title: {
    fontSize: 18,
    fontFamily: "IBMPlexSansArabic-Bold",
    color: colors.neutral800,
  },
  menu: {
    gap: 18,
  },
  item: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 10,
    backgroundColor: "transparent",
    elevation: 0,
    paddingVertical: 6,
  },
  itemText: {
    fontSize: 16,
    fontFamily: "IBMPlexSansArabic-Medium",
    color: colors.neutral800,
  },
  divider: {
    height: 1,
    backgroundColor: colors.line,
    marginBottom: 25,
  },
  bottomsidebar: {
    marginBottom: 80,
  },
});
