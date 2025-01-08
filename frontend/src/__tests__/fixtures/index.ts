import { AllProductsResponse, Product } from "@/types";

export const mockProduct: Product = {
  id: 1,
  name: "Product",
  description: "Totally wild",
  difficulty: "Challenging",
};

export const mockAllProducts: AllProductsResponse = {
  results: [
    {
      id: 1,
      name: "Mars",
      description: "Kind of hot",
      difficulty: "Challenging",
    },
    {
      id: 1,
      name: "Jupiter",
      description: "Far away",
      difficulty: "Moderate",
    },
    {
      id: 1,
      name: "Pluto",
      description: "Pretty cold",
      difficulty: "Easy",
    },
  ],
};
