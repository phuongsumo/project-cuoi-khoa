import React from "react";
import "./App.css";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { Product } from "./pages/product/Product";

function App() {
  return (
    <div>
      <Product />
      <ScrollToTop/>
    </div>
  );
}

export default App;
