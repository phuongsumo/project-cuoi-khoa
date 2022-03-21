import React from "react";
import "./App.css";
import BasicModal from "./components/modal/BasicModal";
import { Product } from "./pages/product/Product";

function App() {
  return (
    <div>
      <Product />
        <BasicModal/>
    </div>
  );
}

export default App;
