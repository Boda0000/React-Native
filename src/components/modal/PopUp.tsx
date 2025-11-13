import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import i18n from "src/locales/i18n";
import { colors } from "src/assets/colors/colors";
import CustomButton from "../btn/CustomButton";

interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({
  visible,
  onClose,
  onConfirmDelete,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.modalText}>
            {i18n.t("Do you want to delete this item?")}
          </Text>

          <View style={styles.buttonsContainer}>
            <CustomButton
              title={i18n.t("Yes")}
              onPress={onConfirmDelete}
              buttonStyle={styles.yesButton}
              textStyle={styles.yesButtonText}
            />
            <CustomButton
              title={i18n.t("No")}
              onPress={onClose}
              buttonStyle={styles.noButton}
              textStyle={styles.noButtonText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopupModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: colors.white,
    width: "80%",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 25,
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: "70%",
  },
  yesButton: {
    flex: 1,
    backgroundColor: colors.error,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 6,
  },
  noButton: {
    flex: 1,
    backgroundColor: colors.neutral500,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 6,
  },
  yesButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  noButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
