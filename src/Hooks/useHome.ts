import { useQuery } from "@tanstack/react-query";
import {
  CoursePackage,
  CoursePackageMapper,
  LandingPageData,
} from "../models/HomeModel";

async function fetchHome(): Promise<CoursePackage[]> {
  const response = await fetch(
    "https://manarbe.oetest.tech/api/v1/ar/landing-page/landing?sessions_type=online&include=packages"
  );

  const data: LandingPageData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch landing page");
  }

  return CoursePackageMapper.parseAllPackages(data);
}

export function useHome() {
  return useQuery<CoursePackage[], Error>({
    queryKey: ["homePackages"],
    queryFn: fetchHome,
  });
}
