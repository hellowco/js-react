import { getUser } from './utils';

jest.mock('./utils', () => ({
  getUser: jest.fn(() => ({ name: 'Alice' }))
}));

test('mock getUser returns Alice', () => {
  expect(getUser()).toEqual({ name: 'Alice' });
});
