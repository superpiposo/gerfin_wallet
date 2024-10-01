import { describe, test, expect } from "vitest";
import { User_Service } from "./User.service";

const user_service = new User_Service();

describe("user_service", () => {
  test("getOne", async () => {
    const user = await user_service.getOne(1);
    expect(user?.nome).toBeDefined();
  });
});
