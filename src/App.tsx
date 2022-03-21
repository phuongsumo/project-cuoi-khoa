import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, HomePage, ListShop } from './components/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-shop" element={<ListShop />} />
      </Routes>
    </div>
  );
}

export default App;
