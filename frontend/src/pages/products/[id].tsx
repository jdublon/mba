import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { Departure, Product } from "@/types";
import Head from "next/head";
import { getProductById, getAllProducts } from "@/helpers";
import { DepartureCard, Hero } from "@/components";

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

  return { props: { product }, revalidate: 60 };
}) satisfies GetStaticProps<{
  product?: Product;
}>;

export default function ProductPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!product) {
    return null;
  }

  const { departures } = product;
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

      <Hero product={product} />
      <div className="container mx-auto p-4">
        {noDepartures && <div>Sorry there are no trips planned right now!</div>}
        {departures && (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-y-4 gap-x-4">
            {departures.map((departure, index) => (
              <DepartureCard departure={departure} key={`departure-${index}`} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
