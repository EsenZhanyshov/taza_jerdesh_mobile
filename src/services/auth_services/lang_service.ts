import axiosInstance from "../../api/axiosInstance";

class lang_service {
  change_lang = async (lang: string) => {
    try {
      const { data } = await axiosInstance.put(`auth/user/lang`, {
        lang: lang,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

const langService = new lang_service();
export { langService };
