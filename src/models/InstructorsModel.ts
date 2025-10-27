export interface MainData {
  data: any[];
  included: RawItem[];
}

export interface RawItem {
  type: string;
  id: string;
  attributes: any;
  relationships?: any;
}

export interface Instructor {
  id: string;
  type: string;
  name: string;
  email: string;
  profile_picture: string;
  gender_label: string;
  country_label: string;
  city_label: string;
  nationality_label: string;
  teaching_type_label: string;
  average_rating: number;
  subjects: string[];
}

export class Map {
  static parseInstructors(rawResponse: MainData): Instructor[] {
    const rawItems = rawResponse.included;
    if (!rawItems?.length) return [];

    const subjectsMap = rawItems
      .filter((item) => item.type === "subject")
      .reduce((acc: Record<string, string>, item) => {
        acc[item.id.toString()] = item.attributes?.name || "";
        return acc;
      }, {});

    const instructors = rawItems.filter((item) => item.type === "instructor");

    return instructors.map((item) => {
      const { id, type, attributes, relationships } = item;

      const {
        name = "",
        email = "",
        profile_picture = "",
        gender_label = "",
        country_label = "",
        city_label = "",
        nationality_label = "",
        teaching_type_label = "",
        average_rating = 0,
      } = attributes;

      const subjectIds: string[] =
        relationships?.subjects?.data?.map((s: any) => s.id.toString()) || [];

      const subjects: string[] = subjectIds.map(
        (sid) => subjectsMap[sid] || `Subject ${sid}`
      );

      return {
        id,
        type,
        name,
        email,
        profile_picture,
        gender_label,
        country_label,
        city_label,
        nationality_label,
        teaching_type_label,
        average_rating,
        subjects,
      };
    });
  }
}
