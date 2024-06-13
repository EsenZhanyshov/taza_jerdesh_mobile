import axiosInstance from "../../api/axiosInstance";

interface iads {
  id: number;
  title: string;
  description: string;
  phone: string;
  metro: string;
  images: number[];
  status: string;
}

class ads_service {
  get_all_ads = async (page: number, size: number) => {
    try {
      const { data } = await axiosInstance.get(`/ads?page=${page}&size=${size}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  get_one_ad = async (id: number) => {
    try {
      const { data } = await axiosInstance.get(`ads/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  get_my_ads = async (page: number, size: number, status: string) => {
    try {
      const { data } = await axiosInstance.get(
        `ads?page=${page}&size=${size}&status=${status}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  create_ads = async (ads: iads) => {
    try {
      const response = await axiosInstance.post("auth/ads", ads);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  };

  update_ads = async (ads: iads, id: number) => {
    try {
      const response = await axiosInstance.put(`auth/ads/${id}`, ads);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  };

  remove_ads = async (id: number) => {
    try {
      const response = await axiosInstance.delete(`auth/ads/${id}`);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  };

  activate_ads = async (id: number) => {
    try {
      const response = await axiosInstance.post(`auth/ads/activate/${id}`);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  };

  deactivate_ads = async (id: number) => {
    try {
      const response = await axiosInstance.post(`auth/ads/deactivate/${id}`);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  };
}

const adsService = new ads_service();
export { adsService };
