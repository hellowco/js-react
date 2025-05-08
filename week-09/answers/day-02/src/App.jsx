import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Product from './Product';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/product/42">Product 42</Link>
      </nav>
      <Routes>
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
