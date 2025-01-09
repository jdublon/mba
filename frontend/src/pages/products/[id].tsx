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
import { DepartureCard } from "@/components/DepartureCard";

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

  // TO DO - no product, show 404 page

  return (
    <>
      <Head>
        {(noDepartures || allDeparturesFull) && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-center my-8">
          {product?.name}
        </h1>
        {!departures && <div>Sorry there are no trips planned right now!</div>}
        {departures && (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-y-4 gap-x-4">
            {departures.map((departure, index) => (
              <DepartureCard
                departure={departure}
                label={`departure-${index}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
