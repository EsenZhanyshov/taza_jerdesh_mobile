import axiosInstance from "../../api/axiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";

class auth_service {
  post_token = async (token: string) => {
    try {
      await AsyncStorage.setItem("token", JSON.stringify(token));
    } catch (err) {
      console.log(err);
    }
  };

  remove_token = async () => {
    await AsyncStorage.removeItem("token");
  };

  check_auth = async () => {
    try {
      const { data } = await axiosInstance.get("/auth/me");
      if (data) return true;
    } catch (error) {
      if (error) return false;
    }
  };

  auth_me = async () => {
    try {
      const { data } = await axiosInstance.get("/auth/me");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

const authService = new auth_service();
export { authService };
