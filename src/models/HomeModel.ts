export interface MainData {
  data: any;
  included: RawItem[];
}

export interface RawItem {
  type: "package";
  id: string;
  attributes: {
    title: string;
    price: string;
    duration_months: number;
    sessions_count: number;
    sessions_type: string;
    session_time_in_minutes: string;
    package_price: string;
  };
}

export interface AllPackage {
  type: string;
  id: string;
  title: string;
  price: string;
  duration_months: number;
  sessions_count: number;
  sessions_type: string;
  session_time_in_minutes: string;
  package_price: string;
  tax_included: string;
}

export class Map {
  static parseData(rawResponse: MainData): AllPackage[] {
    const rawPackages = rawResponse.included;

    if (!rawPackages?.length) {
      return [];
    }

    return rawPackages.map((item) => {
      const { id, type, attributes } = item;
      const {
        title = "",
        price = "0",
        duration_months = 0,
        sessions_count = 0,
        sessions_type = "",
        session_time_in_minutes = "",
        package_price = "0",
      } = attributes;

      return {
        id,
        type,
        title,
        price,
        duration_months,
        sessions_count,
        sessions_type,
        session_time_in_minutes,
        package_price,
        tax_included:"السعر يشمل الضريبة",
      };
    });
  }
}
