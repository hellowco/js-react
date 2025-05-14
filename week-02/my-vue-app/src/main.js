import { add } from './math.js';
import msg from './message.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello!</h1>
    <p id=''></p>
  </div>
`;

console.log(add(10, 20));
console.log(msg());
