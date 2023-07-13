import { max } from "../src/index";

import { describe } from "node:test";

describe("test max", () => {
  test("empty array should throw error", () => {
    expect(() => {
      max([]);
    }).toThrow();
  });
  test("", () => {
    // const;
  });
});
