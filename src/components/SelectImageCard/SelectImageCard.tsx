import { View, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CustomButton from "src/components/btn/CustomButton";
import i18n from "src/locales/i18n";
import styles from "./styles";

const SelectImageCard = () => {
  const queryClient = useQueryClient();
  const { data: selectedImage } = useQuery({
    queryKey: ["selectedImage"],
    queryFn: async () => null,
    initialData: null,
  });

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(i18n.t("permission_denied"));
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      queryClient.setQueryData(["selectedImage"], uri);
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <CustomButton
        title={
          selectedImage
            ? i18n.t("change_photo")
            : i18n.t("select_photo_from_gallrey")
        }
        onPress={handlePickImage}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

export default SelectImageCard;
