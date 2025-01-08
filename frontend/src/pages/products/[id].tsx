import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { Product } from "@/types";
// import Head from "next/head";

export const getStaticPaths = (async () => {
  const res = await fetch(`http://127.0.0.1:8000/products`);
  const { results } = await res.json();

  const paths = results?.map((product: Product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const res = await fetch(`http://127.0.0.1:8000/products/${params?.id}`);
  const product = await res.json();

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
