import { Action } from "./actions";

export interface MainData {
  data: cart[];
}

export interface cart {
  id: string;
  type: string;
  student: string;
  total_price: number;
  actions: Action[];
  cart_product: cartProduct[];
}

export interface cartProduct {
  canteen_name: string;
  product_quantity: number;
  product_price: number;
  total_price_product: number;
  product_name: string;
  image: Image;
  actions:Action[]
}


export interface Image {
  url: string;
}
