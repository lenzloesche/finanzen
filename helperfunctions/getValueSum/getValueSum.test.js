import { getValueSum, getValueSumIst } from ".";

import mockData from "@/__mocks__/mockData";

test("the function getValueSum calculates the valueSum of the Soll value", () => {
  expect(getValueSum(mockData)).toBe(65);
});

test("the function getValueSumIst calculates the valueSum of the Ist value", () => {
  expect(getValueSumIst(mockData)).toBe(30);
});
