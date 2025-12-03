import { makeAutoObservable, runInAction } from "mobx";
import { fetchOrders } from "../Api/orders.api";
import { Order } from "../models/order"; 

class OrderStore {
  orders: Order[] = [];
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

  setOrders(orders: Order[]) {
    this.orders = orders;
  }

  async loadOrders() {
    this.setLoading(true);
    this.setError(null);

    try {
      const orders = await fetchOrders();    
      runInAction(() => this.setOrders(orders));
    } catch (err: any) {
      runInAction(() =>
        this.setError(err.message || "Failed to load orders")
      );
    } finally {
      runInAction(() => this.setLoading(false));
    }
  }
}

export const orderStore = new OrderStore();
