import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import i18n from "src/locales/i18n";
import { colors } from "src/assets/colors/colors";
import CustomButton from "../btn/CustomButton";

interface BottomSheetModalProps {
  visible: boolean;
  onClose: () => void;
}

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark" size={30} color={colors.white} />
          </View>

          <Text style={styles.title}>{i18n.t("Payment Successful")}</Text>

          <Text style={styles.subtitle}>{i18n.t("Confirm Order")}</Text>

          <CustomButton
            title={i18n.t("Close")}
            onPress={onClose}
            buttonStyle={styles.closeButton}
            textStyle={styles.closeText}
          />
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  sheet: {
    width: "100%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.primary500,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  title: {
    fontWeight: "700",
    color: colors.primary500,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 6,
  },
  subtitle: {
    color: colors.primary500,
    textAlign: "center",
    fontSize: 14,
    marginHorizontal: 20,
    marginBottom: 25,
  },
  closeButton: {
    backgroundColor: colors.primary500,
    borderRadius: 12,
    width: "90%",
    paddingVertical: 14,
    alignItems: "center",
  },
  closeText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 14,
  },
});
