import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './cartSlice';
import { addItem } from './cartSlice';

function App() {
  const dispatch = useDispatch();
  const { products, items, loading } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Products</h1>
      {products.map(p => (
        <div key={p.id}>
          <p>{p.title}</p>
          <button onClick={() => dispatch(addItem(p))}>장바구니에 담기</button>
        </div>
      ))}
      <h2>Cart</h2>
      {items.map(i => <p key={i.id}>{i.title}</p>)}
    </div>
  );
}

export default App;
