import { sum } from '../sum.js';


// test suite for sum function
test("sum function should calculate the sum of two numbers", () => {
  // assertions
  expect(sum(2, 3)).toBe(5);
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 1)).toBe(0);
  expect(sum(0, 0)).toBe(0);
  expect(sum(100, 200)).toBe(300);
});
