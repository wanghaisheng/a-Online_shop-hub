import "./css/App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";
import Cart from "./pages/Cart/Cart";
import Clothing from "./pages/Clothing/Clothing";
import Product from "./pages/Product/Product";

function App() {
  return (
    <Router>
      <ToastContainer
        closeOnClick
        theme="colored"
        position="bottom-right"
        newestOnTop
        limit={4}
      />
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
