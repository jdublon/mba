import { getDeparturesById } from "@/helpers";
import { waitFor } from "@testing-library/react";
import fetch, { enableFetchMocks } from "jest-fetch-mock";
import {
  mockId,
  mockAllDepartures,
  mockProductOneDepartures,
} from "../fixtures";
enableFetchMocks();

describe("Helper: getDeparturesById", () => {
  it("SHOULD call the correct endpoint and return departures with the correct product id WHEN id is passed", async () => {
    fetch.once(JSON.stringify(mockAllDepartures), { status: 200 });

    const res = await getDeparturesById(mockId);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/departures/`
      );
      expect(res).toEqual(mockProductOneDepartures);
    });
  });

  it("SHOULD return undefined WHEN the fetch fails", async () => {
    fetch.once("", { status: 500 });

    const res = await getDeparturesById(mockId);

    await waitFor(() => {
      expect(res).toBeUndefined();
    });
  });
});
