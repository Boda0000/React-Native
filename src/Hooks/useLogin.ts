import { useMutation } from "@tanstack/react-query";
import { getCurrentLanguage } from "../locales/i18n";

export type Logindata = {
  mobile: string;
  password: string;
};
async function loginFn(login: Logindata) {
  const lang = await getCurrentLanguage();

  const response = await fetch(
    `https://manarbe.oetest.tech/api/v1/ar/auth/login`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        
      },
      body: JSON.stringify({
        "data": {
        "type": "user",
        "attributes": {
            "mobile": "+201117777777",
            "password": "12345678",
            "device_type": "ios"
        },
        "id": "null"
    }
      }),
    }
  );
  const data = await response.json();
  if (!response.ok) {
    
    console.log("data",data?.errors?.[0]?.detail)
    throw new Error(data?.errors?.[0]?.detail || "Invalid mobile number or password");
  }
  return data;
}
export function useLogin(
  onSuccess?: (data: any) => void,
  onError?: (err: any) => void
) {
  return useMutation({
    mutationFn: loginFn,
    onSuccess,
    onError: (error) => {
      console.log("Login error:", error);
      onError?.(error);
    },
  });
}
