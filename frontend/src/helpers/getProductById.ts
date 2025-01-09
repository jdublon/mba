import { Product } from "@/types";

export const getProductById = async (
  id?: string | string[]
): Promise<Product | undefined> => {
  try {
    const productRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/products/${id}`
    );
    const product = await productRes.json();

    return product;
  } catch (error) {
    console.log(`Error fetching product: `, error);
    return undefined;
  }
};
