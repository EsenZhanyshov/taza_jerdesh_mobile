import axiosInstance from "../../api/axiosInstance";

class banner_service {
  get_all_banners = async () => {
    try {
      const { data } = await axiosInstance.get("/banner");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

const bannerService = new banner_service();
export { bannerService };
