import { getAllProducts } from "@/helpers";
import { waitFor } from "@testing-library/react";
import fetch, { enableFetchMocks } from "jest-fetch-mock";
import { mockAllProducts } from "../fixtures";
enableFetchMocks();

describe("Helper: getAllProducts", () => {
  it("SHOULD call the correct endpoint and return the nested results WHEN invoked", async () => {
    fetch.once(JSON.stringify(mockAllProducts), { status: 200 });

    const res = await getAllProducts();

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("http://django:8000/products");
      expect(res).toEqual(mockAllProducts.results);
    });
  });

  it("SHOULD return an empty array WHEN the fetch fails", async () => {
    fetch.once("", { status: 500 });

    const res = await getAllProducts();

    await waitFor(() => {
      expect(res).toEqual([]);
    });
  });
});
