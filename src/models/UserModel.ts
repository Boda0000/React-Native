export interface UserModel {
  id: string;
  name: string;
  email: string;
  mobile: string;
  token: string;
  message?: string;
  is_subscribed: boolean;
  first_name: string;
  last_name: string;
  language: string;
  profile_picture: string;
  country_id: string;
  city_id: string;
  educational_system_id: string;
  educational_level_id: string;
  country_label: string;
  city_label: string;
  nationality_id: string;
  nationality_label: string | null;
  gender: number;
  iban_number: string;
  bank_name: string;
  gender_label: string;
  educational_level_label: string;
  educational_system_label: string;
  teaching_type: string | null;
  teaching_type_label: string;
  about_instructor: string | null;
  average_rating: number;
  end_date_online_package: string;
  end_date_offline_package: string;
}

export const mapUser = (data: any): UserModel => {
  const attributes = data?.data?.attributes || {};

  return {
    id: data?.data?.id || "",
    name: attributes?.name || "",
    email: attributes?.email || "",
    mobile: attributes?.mobile || "",
    token: data?.meta?.token || "",
    message: data?.meta?.message || "",
    is_subscribed: attributes?.is_subscribed ?? false,
    first_name: attributes?.first_name || "",
    last_name: attributes?.last_name || "",
    language: attributes?.language || "",
    profile_picture: attributes?.profile_picture || "",
    country_id: attributes?.country_id || "",
    city_id: attributes?.city_id || "",
    educational_system_id: attributes?.educational_system_id || "",
    educational_level_id: attributes?.educational_level_id || "",
    country_label: attributes?.country_label || "",
    city_label: attributes?.city_label || "",
    nationality_id: attributes?.nationality_id || "",
    nationality_label: attributes?.nationality_label ?? null,
    gender: attributes?.gender ?? 0,
    iban_number: attributes?.iban_number || "",
    bank_name: attributes?.bank_name || "",
    gender_label: attributes?.gender_label || "",
    educational_level_label: attributes?.educational_level_label || "",
    educational_system_label: attributes?.educational_system_label || "",
    teaching_type: attributes?.teaching_type ?? null,
    teaching_type_label: attributes?.teaching_type_label || "",
    about_instructor: attributes?.about_instructor ?? null,
    average_rating: attributes?.average_rating ?? 0,
    end_date_online_package: attributes?.end_date_online_package || "",
    end_date_offline_package: attributes?.end_date_offline_package || "",
  };
};
