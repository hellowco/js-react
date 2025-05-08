import { multiply } from './multiply';

test('2 * 3 = 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('-1 * 5 = -5', () => {
  expect(multiply(-1, 5)).toBe(-5);
});

test('0 * 10 = 0', () => {
  expect(multiply(0, 10)).toBe(0);
});
