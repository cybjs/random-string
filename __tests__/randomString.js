import { test, expect, describe } from "@jest/globals";

import { randomString } from "../dist/randomString";

describe("测试randomString", function () {
  test("测试长度", function () {
    expect(randomString(32).length).toBe(32);
  });

  test("测试随机程度", function () {
    const randomStringCount = 100;
    const list = Array(randomStringCount)
      .fill(0)
      .map(() => randomString(32));
    expect(new Set(list).size).toBe(randomStringCount);
  });
});
