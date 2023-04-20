const { test, expect } = require("@jest/globals");
const { randomString } = require("../dist/randomString.cjs");

describe("测试randomString.cjs", function () {
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
