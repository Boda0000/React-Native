import { makeAutoObservable, runInAction } from "mobx";
import { fetchProducts , fetchCategories} from "../Api/category.api";
import { Category } from "../models/categoryModel";
import { Product } from "../models/ProductModel";


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
      runInAction(() =>
        this.setError(err.message || "Failed to load categories")
      );
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

class ProductStore {
  products: Product[] = [];
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(val: boolean) {
    this.loading = val;
  }

  setError(err: string | null) {
    this.error = err;
  }

  setProducts(products: Product[]) {
    this.products = products.map((p) => ({
      ...p,
      count: p.quantity || 0,
    }));
  }

  async loadProducts(endpoint: string) {
    this.setLoading(true);
    this.setError(null);

    try {
      const products = await fetchProducts(endpoint);
      runInAction(() => this.setProducts(products));
    } catch (err: any) {
      runInAction(() =>
        this.setError(err.message || "Failed to load products")
      );
    } finally {
      runInAction(() => this.setLoading(false));
    }
  }

  increaseCount(productId: string) {
    const product = this.products.find((p) => p.id === productId);
    if (product) product.count = (product.count || 0) + 1;
  }

  decreaseCount(productId: string) {
    const product = this.products.find((p) => p.id === productId);
    if (product) product.count = Math.max((product.count || 0) - 1, 0);
  }
}


export const categoryStore = new CategoryStore();
export const productStore = new ProductStore();
