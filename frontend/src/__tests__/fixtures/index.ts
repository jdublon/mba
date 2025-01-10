import {
  DeparturesResponse,
  ProductsResponse,
  Departure,
  Path,
  Product,
} from "@/types";
import { GetStaticPropsContext } from "next";

export const mockProduct: Product = {
  id: 1,
  name: "Product",
  description: "Totally wild",
  difficulty: "Challenging",
  location: "New Zealand",
  duration: 9,
};

export const mockId: string = "1";

export const mockAllProducts: ProductsResponse = {
  results: [
    {
      id: 1,
      name: "Mars expedition",
      description: "Kind of hot",
      difficulty: "Challenging",
      location: "Mars",
      duration: 99,
    },
    {
      id: 2,
      name: "Jupiter snorkelling trip",
      description: "Far away",
      difficulty: "Moderate",
      location: "Mars",
      duration: 35,
    },
    {
      id: 3,
      name: "Pluto flyby",
      description: "Pretty cold",
      difficulty: "Easy",
      location: "Pluto",
      duration: 7,
    },
  ],
};

export const mockAllPaths: Path[] = [
  { params: { id: "1" } },
  { params: { id: "2" } },
  { params: { id: "3" } },
];

export const mockAllDepartures: DeparturesResponse = {
  results: [
    {
      product: 1,
      start_date: "2025-05-19",
      price: "3918.00",
      available_pax: 4,
    },
    {
      product: 1,
      start_date: "2025-08-10",
      price: "1715.00",
      available_pax: 8,
    },
    {
      product: 2,
      start_date: "2025-11-12",
      price: "2200.00",
      available_pax: 3,
    },
    {
      product: 3,
      start_date: "2025-11-30",
      price: "2900.00",
      available_pax: 0,
    },
  ],
};

export const mockAllDeparturesFull: Departure[] = [
  {
    product: 1,
    start_date: "2025-05-19",
    price: "3918.00",
    available_pax: 0,
  },
  {
    product: 1,
    start_date: "2025-08-10",
    price: "1715.00",
    available_pax: 0,
  },
];

export const mockProductOneDepartures: Departure[] =
  mockAllDepartures.results.filter((d) => d.product === 1);

export const mockProductOneDeparturesResponse: DeparturesResponse = {
  results: mockProductOneDepartures,
};

export const mockContext: GetStaticPropsContext = {
  params: { id: "1" },
};
