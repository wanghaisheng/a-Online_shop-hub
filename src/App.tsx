import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./css/App.css";
import Favorite from "./pages/Favorite/Favorite";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
