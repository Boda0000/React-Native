// import { makeAutoObservable, runInAction } from "mobx";
// import { fetchProducts } from "../Hooks/useProducts";
// import { Product } from "../models/ProductModel";

// class ProductStore {
//   products: Product[] = [];
//   loading = false;
//   error: string | null = null;

//   constructor() {
//     makeAutoObservable(this); 
//   }

//   setLoading(val: boolean) {
//     this.loading = val;
//   }

//   setError(err: string | null) {
//     this.error = err;
//   }

//   setProducts(products: Product[]) {
//     this.products = products.map((p) => ({ ...p, count: p.quantity || 0 }));
//   }

//   async loadProducts(endpoint: string) {
//     this.setLoading(true);
//     this.setError(null);

//     try {
//       const products = await fetchProducts(endpoint);
//       runInAction(() => this.setProducts(products));
//     } catch (err: any) {
//       runInAction(() => this.setError(err.message || "Failed to load products"));
//     } finally {
//       runInAction(() => this.setLoading(false));
//     }
//   }

//   increaseCount(productId: string) {
//     const product = this.products.find((p) => p.id === productId);
//     if (product) product.count = (product.count || 0) + 1;
//   }

//   decreaseCount(productId: string) {
//     const product = this.products.find((p) => p.id === productId);
//     if (product) product.count = Math.max((product.count || 0) - 1, 0);
//   }
// }

// export const productStore = new ProductStore();
