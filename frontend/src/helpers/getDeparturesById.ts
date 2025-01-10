import { Departure } from "@/types";

export const getDeparturesById = async (
  id?: string | string[]
): Promise<Departure[] | undefined> => {
  let allDepartures: Departure[] = [];
  let nextUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/departures/?product=${id}`;

  try {
    // TO DO: utilise the reverse foreign key serializer to get all departures when fetching product
    while (nextUrl) {
      const departuresRes = await fetch(nextUrl);
      const data = await departuresRes.json();

      allDepartures = [...allDepartures, ...data.results];
      nextUrl = data.next;
    }

    return allDepartures;
  } catch (error) {
    console.log(`Error fetching departures for product id ${id}: `, error);
    return undefined;
  }
};
