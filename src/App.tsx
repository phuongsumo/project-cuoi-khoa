import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, HomePage, ListShop } from './components/index';
import './App.css';
import Footer from './components/footer/Footer';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-shop" element={<ListShop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
