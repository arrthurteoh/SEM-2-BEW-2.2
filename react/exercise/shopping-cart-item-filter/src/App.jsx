import React, { useState } from 'react';
import './App.css';

// Test data - Do not modify
const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true }
];

function App() {
  const [showSaleOnly, setShowSaleOnly] = useState(false);

  const displayedItems = showSaleOnly
    ? items.filter((item) => item.onSale === true)
    : items;

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <button
        className="filter-btn"
        onClick={() => setShowSaleOnly(!showSaleOnly)}
      >
        {showSaleOnly ? "Show All Items" : "Show Sale Items Only"}
      </button>

      <div className="item-list">
        {displayedItems.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-left">
              <span className="item-name">{item.name}</span>
              {item.onSale && <span className="sale-badge">On Sale!</span>}
            </div>
            <span className="item-price">${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;