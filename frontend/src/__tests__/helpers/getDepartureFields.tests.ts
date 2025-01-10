import { getDepartureFields } from "@/helpers";
import { mockAllDepartures } from "../fixtures";

describe("Helper: getDepartureFields", () => {
  it("SHOULD return correctly formatted start and end date WHEN start date and duration are passed", async () => {
    const res = getDepartureFields(mockAllDepartures.results[0], 9);
    expect(res).toEqual([
      { label: "Start Date:", value: "19th May 2025" },
      { label: "End Date:", value: "28th May 2025" },
      { label: "Price:", value: "£3918" },
      { label: "Availability:", value: "Spaces available" },
    ]);
  });
});
