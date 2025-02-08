import React, { useState } from "react";
import "../styles/AdminDashboard.css";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const handleOrderStatusChange = (id, status) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  return (
    <motion.div className="admin-dashboard-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Admin Dashboard</h2>
      <h3>Manage Orders</h3>
      <div className="orders-list">
        {orders.length === 0 ? <p>No orders available.</p> : orders.map((order) => (
          <div key={order.id} className="order-card">
            <p><strong>Order #{order.id}</strong></p>
            <p>Status: {order.status}</p>
            <select value={order.status} onChange={(e) => handleOrderStatusChange(order.id, e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
      <h3>Manage Products</h3>
      <div className="products-list">
        {products.length === 0 ? <p>No products available.</p> : products.map((product) => (
          <div key={product.id} className="product-card">
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
