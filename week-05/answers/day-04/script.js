// Week5 Day4 - Fetch example
const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(API_URL)
  .then(res => {
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
  })
  .then(data => console.log('API Data:', data))
  .catch(err => {
    console.error(err);
    alert('API 호출 실패');
  });
