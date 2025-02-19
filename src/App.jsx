import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Checkout from "../src/components/Checkout";
// import Profile from "../src/components/";
import AdminDashboard from "../src/components/AdminDashboard";
import Wishlist from "../src/components/Wishlist";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
};

export default App;
