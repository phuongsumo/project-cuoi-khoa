import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {CreateAccount, Login, News} from './components/index'
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/createAccount" element={<CreateAccount/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/" element={<News/>}/>
      </Routes>
    </div>
  );
}

export default App;
