import axiosInstance from "../../api/axiosInstance";

class upload_service {
  post_upload = async (file: any) => {
    try {
        const { data } = await axiosInstance.get("/banner");
        return data;
      } catch (error) {
        console.log(error);
      }
  };

  get_upload = async (filename: string) => {
    try {
        const { data } = await axiosInstance.get("/");
        return data;
      } catch (error) {
        console.log(error);
      }
  };
}

const uploadService = new upload_service();
export { uploadService };
