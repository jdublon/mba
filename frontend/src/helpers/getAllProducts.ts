import { Product } from "@/types";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    // TO DO: move URL to env var
    const res = await fetch("http://django:8000/products");
    const { results } = await res.json();

    return results;
  } catch (error) {
    console.log(`Error fetching product urls: `, error);
    return [];
  }
};
