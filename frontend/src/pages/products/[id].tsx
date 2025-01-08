import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { Product } from "@/types";
// import Head from "next/head";

export const getStaticPaths = (async () => {
  // TO DO: move URL to env var
  const res = await fetch(`http://django:8000/products`);
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
  // TO DO: move URLs to env var
  const productRes = await fetch(`http://django:8000/products/${params?.id}`);
  const product = await productRes.json();

  // const departuresRes = await fetch(
  //   `http://django:8000/departures/?product_id=${params?.id}`
  // );
  // const departure = await departuresRes.json();

  return { props: { product }, revalidate: 120 };
}) satisfies GetStaticProps<{
  product: Product;
}>;

export default function ProductPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // TO DO - edit Head logic once product data available
  // console.log(departure);
  return (
    <>
      {/* <Head>
        {(product.departures === 0 || !!product.departuresFull) && <meta name="robots" content="noindex, nofollow" />}
      </Head> */}
      <div>{product.name}</div>
    </>
  );
}
