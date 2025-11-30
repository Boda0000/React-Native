import { makeAutoObservable, runInAction } from "mobx";
import { fetchCategories } from "../Hooks/useCategory";
import { Category } from "../models/categoryModel";

class CategoryStore {
  categories: Category[] = [];
  activeCategory: Category | null = null;
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this); 
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  setActiveCategory(category: Category) {
    this.activeCategory = category;
  }

  setCategories(categories: Category[]) {
    this.categories = categories;
    if (categories.length && !this.activeCategory) {
      this.activeCategory = categories[0]; 
    }
  }

  async loadCategories() {
    this.setLoading(true);
    this.setError(null);

    try {
      const data = await fetchCategories();
      runInAction(() => this.setCategories(data));
    } catch (err: any) {
      runInAction(() => this.setError(err.message || "Failed to load categories"));
    } finally {
      runInAction(() => this.setLoading(false));
    }
  }

  get tabs() {
    return this.categories.map((cat) => ({
      key: cat.id,
      label: cat.name,
      endpoint: cat.actions[0]?.endpoint_url ?? null,
      image_url: cat.image.url ?? null,
      hasImage: !!cat.image.url,
    }));
  }
}

export const categoryStore = new CategoryStore();
