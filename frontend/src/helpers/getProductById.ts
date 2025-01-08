import { Product } from "@/types";

export const getProductById = async (
  id?: string | string[]
): Promise<Product> => {
  // TO DO: move URL to env var
  const productRes = await fetch(`http://django:8000/products/${id}`);
  const product = await productRes.json();

  return product;
};
