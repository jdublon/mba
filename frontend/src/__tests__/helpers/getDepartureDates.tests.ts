import { getDepartureDates } from "@/helpers/getDepartureDates";

describe("Helper: getDepartureDates", () => {
  it("SHOULD return correctly formatted start and end date WHEN start date and duration are passed", async () => {
    const res = getDepartureDates("2025-11-13", 9);
    expect(res).toEqual({
      startDate: "13th November 2025",
      endDate: "22nd November 2025",
    });
  });
});
