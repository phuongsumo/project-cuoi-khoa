import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Recruit, Checkout} from './components/index'
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/recruit" element={<Recruit/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
