import { getDepartureDates } from "@/helpers/getDepartureFields";

describe("Helper: getDepartureDates", () => {
  it("SHOULD return correctly formatted start and end date WHEN start date and duration are passed", async () => {
    const res = getDepartureDates("2025-11-13", 9);
    expect(res).toEqual({
      startDate: "13th Nov 2025",
      endDate: "22nd Nov 2025",
    });
  });
});
