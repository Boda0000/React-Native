import { useQuery } from "@tanstack/react-query";
import { MainData, AllPackage, Map } from "../models/HomeModel";

async function fetchHome() {
  const response = await fetch(
    "https://manarbe.oetest.tech/api/v1/ar/landing-page/landing?sessions_type=online&include=packages"
  );

  const data: MainData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch landing page");
  }

  return Map.parseData(data);
}

export function usePackage() {
  return useQuery<AllPackage[], Error>({
    queryKey: ["packages"],
    queryFn: fetchHome,
  });

}