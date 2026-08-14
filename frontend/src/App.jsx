import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetails.jsx";
import Navbar from "./components/Navbar.jsx";
import CartPage from "./pages/CartPage.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />

      </Routes>
    </Router>

  );
}

export default App;