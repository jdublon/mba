import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Hero } from "@/components/Hero";
import { IconLabelProps } from "@/types";
import { MockIconLabel } from "./mock-components";

jest.mock("../../../components/IconLabel", () => ({
  __esModule: true,
  IconLabel: (props: IconLabelProps) => <MockIconLabel {...props} />,
}));

describe("Component: Hero", () => {
  it("SHOULD match snapshot WHENrendered", () => {
    const component = render(<Hero />);
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render info as expected WHEN rendered", () => {
    const { getByTestId, getByText } = render(<Hero />);

    expect(getByTestId("location"));
    expect(getByTestId("duration"));
    expect(getByTestId("difficulty"));
    expect(getByText(/Island hopping adventure/));
    expect(getByText(/Hike, bike and snorkel/));
  });
});
