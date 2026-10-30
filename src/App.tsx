import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits/:slug" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
