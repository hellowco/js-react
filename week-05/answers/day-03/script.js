// Week5 Day3 - async/await
async function main() {
  console.log('Before read');
  try {
    const data = await readFilePromise('exists.txt');
    console.log('Data:', data);
  } catch (err) {
    console.error('Error:', err.message);
  }
  console.log('After read');
}

// Ensure readFilePromise exists from Day2
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

main();
