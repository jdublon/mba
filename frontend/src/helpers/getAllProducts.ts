import { Product } from "@/types";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/products`);
    const { results } = await res.json();

    return results;
  } catch (error) {
    console.log(`Error fetching product urls: `, error);
    return [];
  }
};
