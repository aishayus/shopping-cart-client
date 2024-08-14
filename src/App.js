import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList.js';
import Cart from './components/Cart.js';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  );
}

export default App;
