import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { Product } from "@/types";

export const getStaticPaths = (async () => {
  // TO DO - fetch all products from django, map each product id to object below
  const paths = [{ params: { id: "product_id" } }];
  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const product = { name: "Product" };
  return { props: { product }, revalidate: 120 };
}) satisfies GetStaticProps<{
  product: Product;
}>;

export default function ProductPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{product.name}</div>;
}
