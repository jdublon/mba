import { getDeparturesById } from "@/helpers/getDeparturesById";
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
      expect(fetch).toHaveBeenCalledWith(`http://django:8000/departures/`);
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
