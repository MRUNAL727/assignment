import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import AddProducts from './pages/AddProducts';
import ViewProducts from './pages/ViewProducts';
import Navbar from './components/Navbar';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import CartContextProvider from './context/CartContext';

const App = () => {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/add-products" element={<AddProducts />}></Route>
            <Route path="/view-products" element={<ViewProducts />}></Route>
            <Route
              path={`/product-details/:id`}
              element={<ProductDetails />}
            ></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
};

export default App;
