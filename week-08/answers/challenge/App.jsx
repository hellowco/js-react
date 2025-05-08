// src/App.jsx
import React, { useContext, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { fetchProducts, addItem, removeItem } from './cartSlice';
import { AppProviders, ThemeContext, UserContext } from './context/ThemeUserContext';

function Dashboard() {
  const dispatch = useDispatch();
  const { products, items, loading } = useSelector(state => state.cart);
  const { user } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: 20 }}>
      <h2>Hello, {user.name}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h3>Products</h3>
      {products.map(p => (
        <div key={p.id}>
          <span>{p.title}</span>
          <button onClick={() => dispatch(addItem(p))}>장바구니에 담기</button>
        </div>
      ))}
      <h3>Cart</h3>
      {items.map(i => (
        <div key={i.id}>
          <span>{i.title}</span>
          <button onClick={() => dispatch(removeItem(i.id))}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppProviders>
        <Dashboard />
      </AppProviders>
    </Provider>
  );
}
