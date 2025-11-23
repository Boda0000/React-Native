export interface MainData {
  data: RawItem[];
  included: RawItem[];
}

export interface RawItem {
  type: string;
  id: string;
  attributes: any;
  relationships?: any;
}

export interface Action {
  endpoint: string;
  method: string;
  label: string;
  bg_color: string;
  key: string;
}
export interface Product {
  id: string;
  type: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  image_url: string;
  actions: Action[];
}

export class Map {
  static parseProducts(rawResponse: MainData): Product[] {
    const rawItems = rawResponse.included || [];
    const products = rawResponse.data || [];

    const imagesMap = rawItems
      .filter((item) => item.type.toLowerCase() === "images")
      .reduce((acc: Record<string, string>, item) => {
        acc[item.id] = item.attributes?.url || "";
        return acc;
      }, {});

    const actionsMap = rawItems
      .filter((item) => item.type.toLowerCase() === "action")
      .reduce((acc: Record<string, any>, item) => {
        acc[item.id] = item.attributes;
        return acc;
      }, {});

    return products
      .filter((item) => item.type.toLowerCase() === "list_products")
      .map((item) => {
        const { id, type, attributes, relationships } = item;

        const imageId = relationships?.image?.data?.id;
        const actionIds: string[] =
          relationships?.actions?.data?.map((a: any) => a.id) || [];

        const actions = actionIds.map((aid) => ({
          endpoint: actionsMap[aid]?.endpoint_url || "",
          method: actionsMap[aid]?.method || "",
          label: actionsMap[aid]?.label || "",
          bg_color: actionsMap[aid]?.bg_color || "",
          key: actionsMap[aid]?.key || "",
        }));

        return {
          id,
          type,
          name: attributes?.name || "",
          price: Number(attributes?.price) || 0,
          description: attributes?.description || "",
          quantity: attributes?.product_quantity || 0,
          image_url: imagesMap[imageId] || "",
          actions,
        };
      });
  }
}
