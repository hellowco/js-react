import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [step, setStep] = useState(1);
  const [initial, setInitial] = useState(0);

  return (
    <div className="App">
      <h1>Dynamic Counter</h1>
      <label>
        초기값:
        <input
          type="number"
          value={initial}
          onChange={e => setInitial(Number(e.target.value) || 0)}
        />
      </label>
      <label style={{ marginLeft: 16 }}>
        증감 단위:
        <input
          type="number"
          value={step}
          onChange={e => setStep(Number(e.target.value) || 1)}
        />
      </label>
      <Counter initialValue={initial} step={step} />
    </div>
  );
}

export default App;
