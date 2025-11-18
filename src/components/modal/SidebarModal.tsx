import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "src/assets/colors/colors";
import i18n from "src/locales/i18n";

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

const SidebarModal: React.FC<SidebarProps> = ({ visible, onClose }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        onPress={onClose}
        activeOpacity={1}
      />

      <View style={styles.sidebar}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={26} color={colors.neutral800} />
            </TouchableOpacity>

            <View style={styles.header2}>
              <Ionicons name="menu" size={26} color={colors.neutral800} />
              <Text style={styles.title}>{i18n.t("Menu")}</Text>
            </View>
          </View>

          <View style={styles.menu}>
            <TouchableOpacity style={styles.item}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color={colors.neutral800}
              />
              <Text style={styles.itemText}>{i18n.t("Notifications")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <Ionicons
                name="globe-outline"
                size={22}
                color={colors.neutral800}
              />
              <Text style={styles.itemText}>{i18n.t("Change language")}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomsidebar}>
          <View style={styles.divider} />

          <TouchableOpacity style={styles.logout}>
            <Ionicons
              name="log-out-outline"
              size={22}
              color={colors.error500}
            />
            <Text style={styles.logoutText}>{i18n.t("Log out")}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.delete}>
            <Ionicons
              name="person-remove-outline"
              size={20}
              color={colors.sidebardelete}
            />
            <Text style={styles.deleteText}>{i18n.t("Delete account")}</Text>
          </TouchableOpacity>
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

  header2: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8,
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
    marginBottom:80, 
  },

  logout: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },

  logoutText: {
    fontSize: 16,
    color: colors.error500,
    fontFamily: "IBMPlexSansArabic-Bold",
  },

  delete: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 10,
  },

  deleteText: {
    fontSize: 15,
    color: colors.sidebardelete,
    fontFamily: "IBMPlexSansArabic-Medium",
  },
});
