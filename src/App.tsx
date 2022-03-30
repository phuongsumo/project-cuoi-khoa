import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Navbar,
  HomePage,
  ListShop,
  Recruit,
  Checkout,
  Footer,
  Product,
} from "./components/index";
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-shop" element={<ListShop />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
