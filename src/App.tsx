import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./css/App.css";
import Favorite from "./pages/Favorite/Favorite";
import Cart from "./pages/Cart/Cart";
import Clothing from "./pages/Clothing/Clothing";
import Product from "./pages/Product/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/clothing/:category" element={<Clothing />} />
        <Route path="/product/:product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
