import axiosInstance from "../../api/axiosInstance";

class category_service {
  async get_all_categories() {
    try {
      const { data } = await axiosInstance.get("/category");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async get_parent_categories() {
    try {
      const { data } = await axiosInstance.get("/category/parents");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

const categoryService = new category_service();
export { categoryService };
