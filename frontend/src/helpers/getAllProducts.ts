import { Product } from "@/types";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    let allProducts: Product[] = [];
    let nextUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/products`;

    while (nextUrl) {
      const res = await fetch(nextUrl);
      const data = await res.json();

      allProducts = [...allProducts, ...data.results];
      nextUrl = data.next;
    }

    return allProducts;
  } catch (error) {
    console.log(`Error fetching product urls: `, error);
    return [];
  }
};
