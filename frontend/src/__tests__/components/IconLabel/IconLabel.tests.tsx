import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { IconLabel } from "@/components/IconLabel";
import { mockIcons } from "./fixtures";

describe("Component: IconLabel", () => {
  it("SHOULD match snapshot WHEN rendered", () => {
    const component = render(<IconLabel icon="location" label="Space" />);
    expect(component).toMatchSnapshot();
  });

  it.each(mockIcons)(`SHOULD render UI as expected for each icon`, (icon) => {
    const component = render(<IconLabel icon={icon.icon} label={icon.label} />);
    expect(component.getByAltText(icon.icon));
    expect(component.getByText(icon.label));
  });
});
