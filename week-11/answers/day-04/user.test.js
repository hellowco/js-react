import { getUser } from './utils';

jest.mock('./utils', () => ({
  getUser: jest.fn(() => ({ name: 'Alice' }))
}));

test('getUser returns mocked Alice', () => {
  expect(getUser()).toEqual({ name: 'Alice' });
});
