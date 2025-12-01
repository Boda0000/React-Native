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
    this.loading = true;
    this.error = null;

    try {
      const data = await fetchCategories();

      runInAction(() => {
        this.setCategories(data);
      });

      if (data.length) {
        this.loadProducts(data[0].actions[0]?.endpoint_url);
      }
    } catch (err: any) {
      runInAction(() => {
        this.error = err.message || "Failed to load categories";
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
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

  setProducts(products: Product[]) {
    this.products = products.map((p) => ({
      ...p,
      count: p.quantity || 0,
    }));
  }

  async loadProducts(endpoint: string) {
    if (!endpoint) return;

    this.loading = true;
    this.error = null;

    try {
      const products = await fetchProducts(endpoint);

      runInAction(() => {
        this.setProducts(products);
      });
    } catch (err: any) {
      runInAction(() => {
        this.error = err.message || "Failed to load products";
      });
    } finally {
      runInAction(() => {
        this.loading = false;
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
