// Week5 Day1 - Callback simulation
function readFileCallback(path, callback) {
  setTimeout(() => {
    if (path !== 'exists.txt') {
      callback(new Error('File not found'), null);
    } else {
      callback(null, 'File content of ' + path);
    }
  }, 500);
}

// Usage
readFileCallback('exists.txt', (err, data) => {
  if (err) console.error('Error:', err.message);
  else console.log('Data:', data);
});

readFileCallback('no.txt', (err, data) => {
  if (err) console.error('Error:', err.message);
  else console.log('Data:', data);
});
