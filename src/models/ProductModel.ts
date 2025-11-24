import { Action } from "./categoryModel";

export interface MainData {
  data: Product[];
}

export interface Product {
  id:string,
  name: string;
  price: number;
  description: string;
  quantity: number;
  image: ImageAttributes;
  actions: Action[];
}


export interface ImageAttributes {
  url: string;
}
