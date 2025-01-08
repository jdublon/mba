import { Departure } from "@/types";

export const getDeparturesById = async (
  id?: string | string[]
): Promise<Departure[]> => {
  // TO DO: fix the viewset in backend so we can fetch only departures with a particular product id
  // OR utilise the reverse foreign key serializer to get all departures in same call as above
  const departuresRes = await fetch(`http://django:8000/departures/`);
  const allDepartures = await departuresRes.json();

  const productDepartures = allDepartures?.results?.filter(
    (d: Departure) => d.product === Number(id)
  );

  return productDepartures;
};
