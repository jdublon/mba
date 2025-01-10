type Difficulty = "Easy" | "Moderate" | "Challenging" | "Tough";

export type Product = {
  id: number;
  name: string;
  description: string;
  difficulty: Difficulty;
  location: string;
  duration: number;
  departures: Departure[];
};

export type ProductsResponse = {
  results: Product[];
};

export type Departure = {
  product: number;
  start_date: string;
  price: string;
  available_pax: number;
};

export type DeparturesResponse = {
  results: Departure[];
};

export type DepartureCardProps = {
  departure: Departure;
  duration: number;
};

export type IconLabelProps = {
  icon: "duration" | "difficulty" | "location";
  label: string;
};

export type HeroProps = {
  product: Product;
};

export type Path = { params: { id: string } };

export type DepartureFields = { label: string; value: string };
