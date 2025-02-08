import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Profile from "../pages/Profile";
import AdminDashboard from "../pages/AdminDashboard";
import Wishlist from "../pages/Wishlist";
import ProductComparison from "../pages/ProductComparison";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/compare" element={<ProductComparison />} />
    </Routes>
  );
};

export default AppRoutes;