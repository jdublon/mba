import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProductPage, {
  getStaticPaths,
  getStaticProps,
} from "../../pages/products/[id]";
import { mockProduct } from "../fixtures";

describe("Product Page", () => {
  it("SHOULD render the product name WHEN data is available", () => {
    const { getByText } = render(<ProductPage product={mockProduct} />);

    expect(getByText("Product"));
  });

  it("SHOULD set the robots meta tag to no index, no follow WHEN product has no departures", () => {
    const { getByText } = render(<ProductPage product={mockProduct} />);
  });

  it("SHOULD set the robots meta tag to no index, no follow WHEN all product departures are full", () => {
    const { getByText } = render(<ProductPage product={mockProduct} />);
  });
});

describe("Product Page - getStaticPaths", () => {
  it("SHOULD call the getProducts helper and return paths in correct format WHEN invoked", () => {});
});

describe("Product Page - getStaticProps", () => {
  it("SHOULD call the getProductById and getDepartures helpers and return props in correct format WHEN invoked", () => {});
});
