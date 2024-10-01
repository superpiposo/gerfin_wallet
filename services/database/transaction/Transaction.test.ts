import { describe, test, expect } from "vitest";
import { Transaction_Service } from "./Transaction.service";

const transaction_service = new Transaction_Service();

describe("Transaction_Services", () => {
  test("getManny", async () => {
    const transactions = await transaction_service.getMany(1, 10, 0);
    expect(transactions.length).toBe(0);
  });
  test("getOne", async () => {
    const transaction = await transaction_service.getOne(1);
    expect(transaction).toBeDefined();
  });
});
