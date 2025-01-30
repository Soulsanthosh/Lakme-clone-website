import React from 'react';
import { DataProvider } from './Lips/DataContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Lips from './Lips/Lips';
import Eyes from './Eyes/Eyes';
import Face from './Face/Face';
import Nails from './Nails/Nails';
import Skincare from './Skincare/Skincare';
import ShopByConcern from './Shop By Concern/ShopByConcern';
import ProductDetails from './Product Details/ProductDetails';
import Sign from './Sign/Sign';
import Addtobag from './AddToBag/Addtobag';
import Wishlistproducts from './Wishlist/Wishlistproducts';
import OrderPlaced from './OrderPlaced/OrderPlaced';

function App() {
  return (
    <div>
      {/* Wrap the app with DataProvider */}
      <DataProvider>
        {/* Wrap the app with Router */}
        <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Lips" element={<Lips />} />
            <Route path="/Eyes" element={<Eyes/>} />
            <Route path="/Face" element={<Face />} />
            <Route path="/Nails" element={<Nails />} />
            <Route path="/Skincare" element={<Skincare />} />
            <Route path="/Shopbyconcern" element={<ShopByConcern />} />
            <Route path="/Productdetails" element={<ProductDetails />} />
            <Route path="/Signin" element={<Sign />} />
            <Route path="/Bag" element={<Addtobag />} />
            <Route path="/Wishlist" element={<Wishlistproducts />} />
            <Route path="/Place Order" element={<OrderPlaced/>} />
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
