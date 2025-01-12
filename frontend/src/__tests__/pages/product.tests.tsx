import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import ProductPage, {
  getStaticPaths,
  getStaticProps,
} from "../../pages/products/[id]";
import {
  mockAllPaths,
  mockAllProducts,
  mockContext,
  mockProduct,
  mockProductDeparturesFull,
  mockProductNoDepartures,
} from "../fixtures";
import { MockDepartureCard, MockHero } from "./mock-components";
import { DepartureCardProps, HeroProps } from "@/types";
import { getAllProducts, getProductById } from "@/helpers";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

jest.mock("../../components/Hero", () => ({
  __esModule: true,
  Hero: (props: HeroProps) => <MockHero {...props} />,
}));

jest.mock("../../components/DepartureCard", () => ({
  __esModule: true,
  DepartureCard: (props: DepartureCardProps) => (
    <MockDepartureCard {...props} />
  ),
}));

jest.mock("../../helpers/getAllProducts");
const mockGetAllProducts = getAllProducts as jest.Mock;
jest.mock("../../helpers/getProductById");
const mockGetProductById = getProductById as jest.Mock;

describe("Product Page", () => {
  it("SHOULD set the robots meta tag to no index, no follow WHEN product has no departures", async () => {
    render(<ProductPage product={mockProductNoDepartures} />);

    await waitFor(() => {
      const metaTag = document.head.querySelector('meta[name="robots"]');
      expect(metaTag).toHaveAttribute("content", "noindex, nofollow");
    });
  });

  it("SHOULD set the robots meta tag to no index, no follow WHEN all product departures are full", () => {
    render(<ProductPage product={mockProductDeparturesFull} />);

    const metaTag = document.head.querySelector('meta[name="robots"]');
    expect(metaTag).toHaveAttribute("content", "noindex, nofollow");
  });

  it("SHOULD render content as expected WHEN product has no departures", () => {
    const { getByText, queryAllByText } = render(
      <ProductPage product={mockProductNoDepartures} />
    );
    expect(getByText(mockProduct.name));
    expect(getByText("Sorry there are no trips planned right now!"));
    expect(
      queryAllByText(`departure card for product: ${mockProduct.id}`)
    ).toHaveLength(0);
  });

  it("SHOULD render content as expected WHEN product has departures", () => {
    const { getByText, queryByText, getAllByText } = render(
      <ProductPage product={mockProduct} />
    );
    expect(getByText(mockProduct.name));
    expect(
      queryByText("Sorry there are no trips planned right now!")
    ).toBeNull();
    expect(
      getAllByText(`departure card for product: ${mockProduct.id}`)
    ).toHaveLength(2);
  });
});

describe("Product Page - getStaticPaths", () => {
  it("SHOULD call the getProducts helper and return paths in correct format WHEN invoked", async () => {
    mockGetAllProducts.mockReturnValueOnce(mockAllProducts.results);

    const res = await getStaticPaths();

    expect(mockGetAllProducts).toHaveBeenCalledTimes(1);
    expect(res).toEqual({ paths: mockAllPaths, fallback: false });
  });
});

describe("Product Page - getStaticProps", () => {
  it("SHOULD call the getProductById and getDepartures helpers and return props in correct format WHEN invoked", async () => {
    mockGetProductById.mockReturnValueOnce(mockProduct);

    const res = await getStaticProps(mockContext);

    expect(mockGetProductById).toHaveBeenCalledTimes(1);
    expect(res).toEqual({
      props: { product: mockProduct },
      revalidate: 60,
    });
  });
});
