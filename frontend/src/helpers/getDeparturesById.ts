import { Departure } from "@/types";

export const getDeparturesById = async (
  id?: string | string[]
): Promise<Departure[] | undefined> => {
  try {
    // TO DO: utilise the reverse foreign key serializer to get all departures in same call as above
    const departuresRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/departures/?product=${id}`
    );
    const { results } = await departuresRes.json();

    return results;
  } catch (error) {
    console.log(`Error fetching departures for product id ${id}: `, error);
    return undefined;
  }
};
