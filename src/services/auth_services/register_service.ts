import axiosInstance from "../../api/axiosInstance";

class register_service {
  register = async (phone: string, svp: string) => {
    try {
      await axiosInstance.post(`/auth/sign-up`, {
        phone: phone,
        svp: svp,
      });
      return null;
    } catch (err: any) {
      const message: string = err.response?.data?.message || "";
      const lastFourDigits = message.match(/\d{4}$/);
      return lastFourDigits ? parseInt(lastFourDigits[0], 10) : null;
    }
  };

  register_activate = async (phone: string, code: number) => {
    try {
      const { data } = await axiosInstance.post(`/auth/sign-up/verify`, {
        phone: phone,
        code: code,
      });
      return data;
    } catch (err: any) {
      console.log(err);
    }
  };
}

const registerService = new register_service();
export { registerService };
