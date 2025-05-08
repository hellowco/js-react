const postalInput = document.getElementById('postal');
const btn = document.getElementById('searchBtn');
const resultDiv = document.getElementById('result');

btn.addEventListener('click', () => {
  const code = postalInput.value.trim();
  if (!code) return;
  fetch(`https://api.zippopotam.us/kr/${code}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const place = data.places[0]['place name'];
      const state = data.places[0].state;
      resultDiv.textContent = `${place}, ${state}`;
    })
    .catch(err => console.error(err));
});
