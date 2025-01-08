import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { Departure, Product } from "@/types";
import Head from "next/head";

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

  // TO DO: fix the viewset in backend so we can fetch only departures with a particular product id
  // OR utilise the reverse foreign key serializer to get all departures in same call as above
  const departuresRes = await fetch(`http://django:8000/departures/`);
  const allDepartures = await departuresRes.json();
  const productDepartures = allDepartures?.results?.filter(
    (d: Departure) => d.product === Number(params?.id)
  );

  return { props: { product, productDepartures }, revalidate: 120 };
}) satisfies GetStaticProps<{
  product: Product;
}>;

export default function ProductPage({
  product,
  productDepartures,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const noDepartures = productDepartures.length === 0;
  const allDeparturesFull = productDepartures.every(
    (d: Departure) => d.available_pax === 0
  );

  return (
    <>
      <Head>
        {(noDepartures || allDeparturesFull) && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      <div>{product.name}</div>
    </>
  );
}
