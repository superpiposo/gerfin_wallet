import { describe, test, expect } from "vitest";
import { Wallet_Service } from "./Wallet.service";

const wallet_service = new Wallet_Service();

describe("Wallet_Service", () => {
  test("getOne", async () => {
    const wallet = await wallet_service.getOne(1);
    expect(wallet).toBeDefined();
  });
});
