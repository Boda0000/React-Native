export interface MainData {
  data: Category[];
}
export interface Category {
  id: string;
  type: string;
  name: string;
  actions: Action[];
  image: ImageAttributes;
}

export interface Action {
  endpoint_url: string;
  method: string;
  label: string;
  bg_color: string;
  key: string;
}
export interface ImageAttributes {
  url: string;
}
