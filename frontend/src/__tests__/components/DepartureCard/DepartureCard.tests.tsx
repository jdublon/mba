import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { DepartureCard } from "@/components/DepartureCard";
import { mockAllDepartures } from "../../fixtures";

describe("Component: DepartureCard", () => {
  it("SHOULD match snapshot WHEN rendered", () => {
    const component = render(
      <DepartureCard
        departure={mockAllDepartures.results[1]}
        label="departure-1"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("SHOULD render departure info as expected WHEN spaces are available", () => {
    const { getByText } = render(
      <DepartureCard
        departure={mockAllDepartures.results[1]}
        label="departure-1"
      />
    );

    expect(getByText(`Start Date: ${mockAllDepartures.results[1].start_date}`));
    expect(getByText(`Price: £${mockAllDepartures.results[1].price}`));
    expect(getByText("Availability: Spaces available"));
  });

  it("SHOULD render departure info as expected WHEN no spaces are available", () => {
    const { getByText } = render(
      <DepartureCard
        departure={mockAllDepartures.results[3]}
        label="departure-3"
      />
    );

    expect(getByText(`Start Date: ${mockAllDepartures.results[3].start_date}`));
    expect(getByText(`Price: £${mockAllDepartures.results[3].price}`));
    expect(getByText("Availability: Sorry this trip is fully booked!"));
  });
});
