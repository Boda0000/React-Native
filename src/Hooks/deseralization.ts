import { Deserializer } from "jsonapi-serializer";

export async function deserializeData(response: Response): Promise<any[]> {
  const jsonData = await response.json();

  const deserializer = new Deserializer({
    pluralizeType: false,
    keyForAttribute: "snake_case",
  });

  const cleanData: any[] = await deserializer.deserialize(jsonData);

  return cleanData;
}


