import { useQuery } from "@tanstack/react-query";
import { MainData, Instructor, Map } from "../models/InstructorsModel";

async function fetchInstructors() {
  const response = await fetch(
    "https://manarbe.oetest.tech/api/v1/ar/landing-page/landing?sessions_type=online&include=instructors"
  );

  const data: MainData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch instructors");
  }

  return Map.parseInstructors(data);
}

export function useInstructors() {
  return useQuery<Instructor[], Error>({
    queryKey: ["instructors"],
    queryFn: fetchInstructors,
  });
}
