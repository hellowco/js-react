// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Welcome to Dashboard!" />
      <Counter />
      <Footer author="Your Name" />
    </div>
  );
}

export default App;
