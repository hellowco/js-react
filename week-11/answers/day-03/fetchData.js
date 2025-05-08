export function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve('peanut butter'), 500);
  });
}

export function fetchDataReject() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('error')), 500);
  });
}
