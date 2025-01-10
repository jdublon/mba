import { getDeparturesById } from "@/helpers";
import { waitFor } from "@testing-library/react";
import fetch, { enableFetchMocks } from "jest-fetch-mock";
import {
  mockId,
  mockProductOneDepartures,
  mockProductOneDeparturesResponse,
} from "../fixtures";
enableFetchMocks();

describe("Helper: getDeparturesById", () => {
  it("SHOULD call the correct endpoint and return nested results object WHEN id is passed", async () => {
    fetch.once(JSON.stringify(mockProductOneDeparturesResponse), {
      status: 200,
    });

    const res = await getDeparturesById(mockId);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/departures/?product=${mockId}`
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
