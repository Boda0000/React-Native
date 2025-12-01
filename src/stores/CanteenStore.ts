import { makeAutoObservable, runInAction } from "mobx";
import { fetchCategories, fetchProducts } from "../Api/category.api";
import { Category } from "../models/categoryModel";
import { Product } from "../models/ProductModel";

class CanteenStore {
  categories: Category[] = [];
  activeCategory: Category | null = null;
  products: Product[] = [];
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setProp<Key extends keyof this>(key: Key, value: this[Key]) {
    this[key] = value;
  }

  async loadCategories() {
    this.setProp("loading", true);
    this.setProp("error", null);

    try {
      const data = await fetchCategories();

      runInAction(() => {
        this.setProp("categories", data);
        if (data.length && !this.activeCategory) {
          this.setProp("activeCategory", data[0]);
        }
      });

      const endpoint = data[0]?.actions[0]?.endpoint_url;
      if (endpoint) {
        this.loadProducts(endpoint);
      }
    } catch (err: any) {
      runInAction(() => {
        this.setProp("error", err.message || "Failed to load categories");
      });
    } finally {
      runInAction(() => {
        this.setProp("loading", false);
      });
    }
  }

  setActiveCategory(category: Category) {
    this.setProp("activeCategory", category);
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

  async loadProducts(endpoint: string) {
    if (!endpoint) return;

    this.setProp("loading", true);
    this.setProp("error", null);

    try {
      const products = await fetchProducts(endpoint);

      runInAction(() => {
        const normalized = products.map((p) => ({
          ...p,
          count: p.quantity || 0,
        }));
        this.setProp("products", normalized);
      });
    } catch (err: any) {
      runInAction(() => {
        this.setProp("error", err.message || "Failed to load products");
      });
    } finally {
      runInAction(() => {
        this.setProp("loading", false);
      });
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

export const canteenStore = new CanteenStore();
