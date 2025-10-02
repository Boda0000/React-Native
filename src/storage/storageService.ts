import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserModel } from "../models/UserModel";

export const saveUser = async (user: UserModel) => {
  try {

    await AsyncStorage.setItem("userData", JSON.stringify(user));
    console.log("userr", user);
  } catch (error) {
    console.log("Error saving user:", error);
  }
};

export const getUser = async (): Promise<UserModel | null> => {
  try {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      return JSON.parse(userData);
    }
    return null;
  } catch (error) {
    console.log("Error getting user:", error);
    return null;
  }
};
