import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Hero } from "@/components";
import { IconLabelProps } from "@/types";
import { MockIconLabel } from "./mock-components";
import { mockProduct } from "@/__tests__/fixtures";

jest.mock("../../../components/IconLabel", () => ({
  __esModule: true,
  IconLabel: (props: IconLabelProps) => <MockIconLabel {...props} />,
}));

describe("Component: Hero", () => {
  it("SHOULD match snapshot WHEN rendered", () => {
    const component = render(<Hero product={mockProduct} />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render info as expected WHEN rendered", () => {
    const { getByText } = render(<Hero product={mockProduct} />);

    expect(getByText(mockProduct.location));
    expect(getByText(`${mockProduct.duration} nights`));
    expect(getByText(mockProduct.difficulty));
    expect(getByText(mockProduct.name));
    expect(getByText(mockProduct.description));
  });
});
