import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { Product } from "@/types";

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          name: "next.js",
        },
      },
    ],
    fallback: true,
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
