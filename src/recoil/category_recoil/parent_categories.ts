import { selector, atom, useRecoilState, useSetRecoilState } from 'recoil';
import { categoryService } from '../../services/ad_services/category_service';

// Атомы Recoil для хранения данных категорий
const categoriesState = atom({
  key: 'categoriesState',
  default: [],
});

const loadingState = atom({
  key: 'categoriesLoadingState',
  default: false,
});

const errorState = atom({
  key: 'categoriesErrorState',
  default: null,
});

// Селектор для получения всех категорий
const getAllCategoriesSelector = selector({
  key: 'getAllCategoriesSelector',
  get: async ({ get }) => {
    try {
      // Устанавливаем состояние загрузки
      get(loadingState);
      // Получаем данные категорий с помощью сервиса
      const categories = await categoryService.get_all_categories();
      // Обновляем атом с данными категорий
      return categories;
    } catch (error) {
      // Устанавливаем состояние ошибки
      useSetRecoilState(errorState, error.message);
      console.error(error);
      return [];
    } finally {
      // Снимаем состояние загрузки
      useSetRecoilState(loadingState, false);
    }
  },
});

// Используйте атомы и селекторы в вашем коде Recoil
