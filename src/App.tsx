import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Navbar, HomePage, ListShop, Recruit, Checkout, Footer, Product,
  Achievement,
  HistoryAndMission,
} from './components/index';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import './App.css';

function App(): JSX.Element {
  return (
    <PayPalScriptProvider options={{ "client-id": `${process.env.REACT_APP_PAYPAL_CLIENT_ID}` }}>
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
        </Routes>
        <Footer />
      </div>
    </PayPalScriptProvider>

  );
}

export default App;
