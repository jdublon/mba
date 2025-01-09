type Difficulty = "Easy" | "Moderate" | "Challenging" | "Tough";

export type Product = {
  id: number;
  name: string;
  description: string;
  difficulty: Difficulty;
};

export type AllProductsResponse = {
  results: Product[];
};

export type Departure = {
  product: number;
  start_date: string;
  price: string;
  available_pax: number;
};

export type AllDeparturesResponse = {
  results: Departure[];
};

export type DepartureCardProps = {
  departure: Departure;
  label: string;
};

export type IconLabelProps = {
  icon: "duration" | "difficulty" | "location";
  label: string;
};
