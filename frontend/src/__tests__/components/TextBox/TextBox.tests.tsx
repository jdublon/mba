import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { TextBox } from "@/components";
import { mockText, mockTextStyles, mockContainerStyles } from "../../fixtures";

describe("Component: TextBox", () => {
  it("SHOULD render the text and apply the correct classes WHEN classes are provided", () => {
    const { getByText } = render(
      <TextBox
        text={mockText}
        textStyles={mockTextStyles}
        containerStyles={mockContainerStyles}
      />
    );

    const paragraph = getByText(mockText);
    const container = paragraph.parentElement;

    expect(container).toHaveClass(mockContainerStyles);
    expect(paragraph).toHaveClass(mockTextStyles);
  });
});
