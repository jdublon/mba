import { Product } from "@/types";

export const getProductById = async (
  id?: string | string[]
): Promise<Product | undefined> => {
  try {
    // TO DO: move URL to env var
    const productRes = await fetch(`http://django:8000/products/${id}`);
    const product = await productRes.json();

    return product;
  } catch (error) {
    console.log(`Error fetching product: `, error);
    return undefined;
  }
};
