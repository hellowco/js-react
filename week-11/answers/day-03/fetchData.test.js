import { fetchData, fetchDataReject } from './fetchData';

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('fetchDataReject throws error', async () => {
  await expect(fetchDataReject()).rejects.toThrow('error');
});
