import { View, Image, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useQuery, useQueryClient } from "@tanstack/react-query";
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
      <TouchableOpacity onPress={handlePickImage}>
        {selectedImage ? (
          <Image
            source={{ uri: selectedImage }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={require("../../assets/images/Addpic.png")}
            style={{ width: 90, height: 90 }}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SelectImageCard;
