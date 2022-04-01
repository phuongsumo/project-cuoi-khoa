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
  Achievement,
  HistoryAndMission,
  CreateAccount, 
  Login, 
  News, 
  Commercial_story, 
  Promotional_news, 
  Sk_events
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
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/historyAndMission" element={<HistoryAndMission />} />
        <Route path="/createAccount" element={<CreateAccount/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/commercial_story" element={<Commercial_story/>}/>
        <Route path='/promotional_news' element={<Promotional_news />} />
        <Route path='/sk_events' element={<Sk_events />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
