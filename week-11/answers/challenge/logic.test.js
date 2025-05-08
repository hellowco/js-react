import { capitalize } from './logic';

test('capitalize word', () => {
  expect(capitalize('hello')).toBe('Hello');
});
