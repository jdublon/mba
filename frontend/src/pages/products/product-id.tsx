import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { Product } from "@/types";
import Head from "next/head";

export const getStaticPaths = (async () => {
  // TO DO - fetch all products from django, map each product id to object below
  const paths = [{ params: { id: "product_id" } }];
  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  // TO DO - get page props by id/slug
  const product = { name: "Product" };
  return { props: { product }, revalidate: 120 };
}) satisfies GetStaticProps<{
  product: Product;
}>;

export default function ProductPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // TO DO - edit Head logic once product data available
  return (
    <>
      {/* <Head>
        {(product.departures === 0 || !!product.departuresFull) && <meta name="robots" content="noindex, nofollow" />}
      </Head> */}
      <div>{product.name}</div>
    </>
  );
}
