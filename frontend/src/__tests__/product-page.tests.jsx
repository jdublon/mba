import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProductPage from "@/pages/products/product-id";
import { mockProduct } from "./fixtures";

describe("Product Page", () => {
  it("SHOULD render the product name WHEN data is available", () => {
    const { getByText } = render(<ProductPage product={mockProduct} />);

    expect(getByText("Product"));
  });
});
