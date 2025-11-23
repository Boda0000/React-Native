import { useQuery } from "@tanstack/react-query";
import { MainData, Product, Map } from "../models/ProductModel";
 

async function fetchProducts(endpoint: string, CategoryId?: string): Promise<Product[]> {
  const url =
     `${endpoint}/${CategoryId}`
 console.log("Fetching products from URL:", url);
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDMvYXBpL3YxL2FyL2xvZ2luIiwiaWF0IjoxNzYzNTQ5MTg1LCJleHAiOjE3NjYxNDExODUsIm5iZiI6MTc2MzU0OTE4NSwianRpIjoiU1pXandFWGtYNXdINXlwZyIsInN1YiI6Ijg4ZGY2OWY2LTRjMzAtNDEwNC04MzQ2LTZiOWFkNmVmMzBmNCIsInBydiI6ImVlOTcyZWU0NDg1NjFjMTJlZjRjOGRmMTMyMjE1ODI5YmU1NDgyODcifQ.KJYdHwybZSwEEbZqSnD9oqsCe2xR6kDd0jMPsEKTsCE",
      "session-key": "57F944B9A9A740D8ABDC94B7DAB33780A1C256665DDAD3ECB3FEDDAE29377D605C6A418387C6F3492CC6D376E011FEA3"
    },
  });
  console.log("respons",response);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: MainData = await response.json();
  console.log("data" ,data);
  return Map.parseProducts(data);
}

export function useProducts(endpoint: string, CategoryId?: string) {
  return useQuery<Product[], Error>({
    queryKey: ["products", endpoint, CategoryId],
    queryFn: () => fetchProducts(endpoint, CategoryId),
  });
}
