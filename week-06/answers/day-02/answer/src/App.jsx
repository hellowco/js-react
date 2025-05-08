import './App.css';

function App() {
  const msg = 'JSX 모드';
  return (
    <div className="App">
      <h2>React 배우기 재미있다!</h2>
      <p>오늘은 JSX 문법을 연습합니다.</p>
      <p>{`${msg} 활성화!`}</p>
      <button className="my-button">클릭해 보기</button>
    </div>
  );
}

export default App;
