import { Action } from "./actions";

export interface MainData {
  data: Order[];
}

export interface Order {
  id: string;
  type: string;
  order_number: string;
  user: string;
  student: string;
  total_price: number;
  status: string;
  status_name: string;
  break_time: string;
  order_date: string;
  actions: Action[];
  order_product: product[];
}

export interface product {
  product_uuid: string;
  product_quantity: number;
  product_price: number;
  product_name: string;
  category_name: string;
  canteen_name: string;
  product_status: string;
  status: string;
  image:Image
}

export interface Image {
  url: string;
}
