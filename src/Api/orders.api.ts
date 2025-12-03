import { deserializeData } from "../Hooks/deseralization";

const ORDERS_URL =
  "https://api.demo.ouredu.net/canteen/api/v1/ar/orders/student/list-orders";

const BASE_HEADERS = {
  Accept: "application/vnd.api+json",
  "Content-Type": "application/vnd.api+json",
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDMvYXBpL3YxL2FyL2xvZ2luIiwiaWF0IjoxNzY0NjY4NzgyLCJleHAiOjE3NjcyNjA3ODIsIm5iZiI6MTc2NDY2ODc4MiwianRpIjoiY3VVakNoclBNdm9NQldsZSIsInN1YiI6Ijg4ZGY2OWY2LTRjMzAtNDEwNC04MzQ2LTZiOWFkNmVmMzBmNCIsInBydiI6ImVlOTcyZWU0NDg1NjFjMTJlZjRjOGRmMTMyMjE1ODI5YmU1NDgyODcifQ.NO1SMPunPz8qkdGvi8SPhEjN1GMrTg6LeG1Dkt8z6CU",
  "session-key":
    "CE2E7F8B49DFD77D27E415986FE6783C6631D8B08A634B27E1BEBC9597EAE59410A738277FA5DAE197235B8785119140",
};

async function apiRequest(url: string) {
  const response = await fetch(url, {
    headers: BASE_HEADERS,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch from: ${url}`);
  }

  return deserializeData(response);
}

export async function fetchOrders(url = ORDERS_URL) {
  console.log("Fetching orders from:", url);
  return await apiRequest(url);
}
