import axiosInstance from "../../api/axiosInstance";

class login_service {
  login = async (phone: string) => {
    try {
      await axiosInstance.post(`/auth/sign-in`, {
        phone: phone,
      });
      return null;
    } catch (err: any) {
      const message: string = err.response?.data?.message || "";
      const lastFourDigits = message.match(/\d{4}$/);
      return lastFourDigits ? parseInt(lastFourDigits[0], 10) : null;
    }
  };
  login_activate = async (phone: string, code: number) => {
    try {
      const { data } = await axiosInstance.post(`/auth/sign-in/verify`, {
        phone: phone,
        code: code,
      });
      return data;
    } catch (err: any) {
      console.log(err);
    }
  };
}

const loginService = new login_service();
export { loginService };
