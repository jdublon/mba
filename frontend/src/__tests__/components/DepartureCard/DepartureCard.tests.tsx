import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { DepartureCard } from "@/components";
import { mockAllDepartures } from "../../fixtures";

describe("Component: DepartureCard", () => {
  it("SHOULD match snapshot WHEN rendered", () => {
    const component = render(
      <DepartureCard departure={mockAllDepartures.results[1]} duration={9} />
    );
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render departure info as expected WHEN spaces are available", () => {
    const { getByText } = render(
      <DepartureCard departure={mockAllDepartures.results[1]} duration={9} />
    );

    expect(getByText("Start Date:"));
    expect(getByText("10th Aug 2025"));
    expect(getByText("End Date:"));
    expect(getByText("19th Aug 2025"));
    expect(getByText("Price:"));
    expect(getByText("£1715"));
    expect(getByText("Availability:"));
    expect(getByText("Spaces available"));
  });

  it("SHOULD render departure info as expected WHEN no spaces are available", () => {
    const { getByText } = render(
      <DepartureCard departure={mockAllDepartures.results[3]} duration={3} />
    );

    expect(getByText("Start Date:"));
    expect(getByText("30th Nov 2025"));
    expect(getByText("End Date:"));
    expect(getByText("3rd Dec 2025"));
    expect(getByText("Price:"));
    expect(getByText("£2900"));
    expect(getByText("Availability:"));
    expect(getByText("Sorry this trip is fully booked!"));
  });
});
