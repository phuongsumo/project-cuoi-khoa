import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  HomePage,
  ListShop,
  Recruit,
  Checkout,
  Footer,
} from "./components/index";
import "./App.css";
import ProfilesWrapper from "./components/Profiles/ProfilesWrapper";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfilesWrapper />} />
        <Route path="/list-shop" element={<ListShop />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/test" element={<ProfilesWrapper />} />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
