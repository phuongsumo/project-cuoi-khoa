import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, HomePage } from './components/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
