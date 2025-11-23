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

export interface Category {
  id: string;
  type: string;
  name: string;
  action_endpoint: string;
  action_method: string;
  action_label: string;
  action_bg_color: string;
  image_url: string;
}

export interface Action {
  endpoint_url: string;
  method: string;
  label: string;
  bg_color: string;
  key: string;
}

export class Map {
  static parseCategories(rawResponse: any): Category[] {
    const rawItems = rawResponse.included || [];
    const dataItems = rawResponse.data || [];

    const actionsMap = rawItems
      .filter((item: any) => item.type === "actions")
      .reduce((acc: Record<string, any>, item: any) => {
        acc[item.id] = item.attributes;
        return acc;
      }, {});

    const imagesMap = rawItems
      .filter((item: any) => item.type === "images")
      .reduce((acc: Record<string, string>, item: any) => {
        acc[item.id] = item.attributes?.url || "";
        return acc;
      }, {});

    return dataItems
      .filter((item: any) => item.type === "list_categories")
      .map((item: any) => {
        const { id, type, attributes, relationships } = item;
        const actionRelId = relationships?.actions?.data?.[0]?.id;
        const imageRelId = relationships?.image?.data?.id;

        const actionAttr = (actionRelId && actionsMap[actionRelId]) || {
          endpoint_url: "",
          method: "",
          label: "",
          bg_color: "",
        };
        const image_url = (imageRelId && imagesMap[imageRelId]) || "";

        const result: Category = {
          id,
          type,
          name: attributes?.name || "",
          action_endpoint: actionAttr.endpoint_url,
          action_method: actionAttr.method,
          action_label: actionAttr.label,
          action_bg_color: actionAttr.bg_color,
          image_url,
        };

        return result;
      });
  }
}
