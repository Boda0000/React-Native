import { Product } from "../models/ProductModel";
import { deserializeData } from "./deseralization";

const BASE_URL =
  "https://api.demo.ouredu.net/canteen/api/v1/ar/products/student/products";

export async function fetchProducts(url: string): Promise<Product[]> {
  console.log("Fetching products from:", url);

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDMvYXBpL3YxL2FyL2xvZ2luIiwiaWF0IjoxNzYzNTQ5MTg1LCJleHAiOjE3NjYxNDExODUsIm5iZiI6MTc2MzU0OTE4NSwianRpIjoiU1pXandFWGtYNXdINXlwZyIsInN1YiI6Ijg4ZGY2OWY2LTRjMzAtNDEwNC04MzQ2LTZiOWFkNmVmMzBmNCIsInBydiI6ImVlOTcyZWU0NDg1NjFjMTJlZjRjOGRmMTMyMjE1ODI5YmU1NDgyODcifQ.KJYdHwybZSwEEbZqSnD9oqsCe2xR6kDd0jMPsEKTsCE",
      "session-key":
        "57F944B9A9A740D8ABDC94B7DAB33780A1C256665DDAD3ECB3FEDDAE29377D605C6A418387C6F3492CC6D376E011FEA3",
    },
  });

  if (!response.ok) throw new Error("Failed to fetch products");

  const products = await deserializeData(response);
  console.log("Fetched products data:", products);
  return products;
}
 