export interface UserModel {
  id: string;
  name: string;
  email: string;
  mobile: string;
  token: string;
  message?: string;
}

export const mapUserResponse = (data: any): UserModel => {
  return {
    id: data?.data?.id || "",
    name: data?.data?.attributes?.name || "",
    email: data?.data?.attributes?.email || "",
    mobile: data?.data?.attributes?.mobile || "",
    token: data?.meta?.token || "",   
    message: data?.meta?.message || "",  
  };
};
