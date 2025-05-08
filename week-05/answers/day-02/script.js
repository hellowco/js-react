// Week5 Day2 - Promise version
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path !== 'exists.txt') {
        reject(new Error('File not found'));
      } else {
        resolve('File content of ' + path);
      }
    }, 500);
  });
}

// Usage
readFilePromise('exists.txt')
  .then(data => console.log('Data:', data))
  .catch(err => console.error('Error:', err.message));

readFilePromise('no.txt')
  .then(data => console.log('Data:', data))
  .catch(err => console.error('Error:', err.message));
