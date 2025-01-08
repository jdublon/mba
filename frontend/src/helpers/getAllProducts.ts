import { Product } from "@/types";

export const getAllProducts = async (): Promise<Product[]> => {
  // TO DO: move URL to env var
  const res = await fetch(`http://django:8000/products`);
  const { results } = await res.json();

  return results;
};
