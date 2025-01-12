import { getProductById } from "@/helpers/getProductById";
import { waitFor } from "@testing-library/react";
import fetch, { enableFetchMocks } from "jest-fetch-mock";
import { mockId, mockProduct } from "../fixtures";
enableFetchMocks();

describe("Helper: getProductById", () => {
  it("SHOULD call the correct endpoint with the correct id and return the product WHEN id is passed", async () => {
    fetch.once(JSON.stringify(mockProduct), { status: 200 });

    const res = await getProductById(mockId);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/products/${mockId}`
      );
      expect(res).toEqual(mockProduct);
    });
  });

  it("SHOULD return undefined WHEN the fetch fails", async () => {
    fetch.once("", { status: 500 });

    const res = await getProductById(mockId);

    await waitFor(() => {
      expect(res).toBeUndefined();
    });
  });
});
