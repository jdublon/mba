import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { Departure, Product } from "@/types";
import Head from "next/head";
import { getProductById } from "@/helpers/getProductById";
import { getAllProducts } from "@/helpers/getAllProducts";
import { getDeparturesById } from "@/helpers/getDeparturesById";

export const getStaticPaths = (async () => {
  const allProducts = await getAllProducts();

  const paths = allProducts?.map((product: Product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const product = await getProductById(params?.id);
  const departures = await getDeparturesById(params?.id);

  return { props: { product, departures }, revalidate: 60 };
}) satisfies GetStaticProps<{
  product?: Product;
  departures?: Departure[];
}>;

export default function ProductPage({
  product,
  departures,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const noDepartures = departures?.length === 0;
  const allDeparturesFull = departures?.every(
    (d: Departure) => d.available_pax === 0
  );

  return (
    <>
      <Head>
        {(noDepartures || allDeparturesFull) && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      <div>{product?.name}</div>
    </>
  );
}
