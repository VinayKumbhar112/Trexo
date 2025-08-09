// BuyActionWindow.jsx
import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, closeBuyWindow }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { setAllHoldings } = useContext(GeneralContext); // ✅ Get updater from context
const saveToDB = async (stock) => {
  try {
    const response = await axios.post(' https://trexo-1.onrender.com/newholdings', stock); // Adjust endpoint
    console.log("Saved to DB:", response.data);
  } catch (err) {
    console.error("Failed to save to DB", err);
  }
};

  const handleBuyClick = async () => {
    try {
      const res = await axios.post(" https://trexo-1.onrender.com/neworder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      const newStock = res.data; 
      console.log(newStock);
      await saveToDB(newStock);
      setAllHoldings(prev =>
        Array.isArray(prev) ? [...prev, newStock] : [newStock]
      ); 

      closeBuyWindow(); 
    } catch (error) {
      console.error("Buy order failed:", error);
      alert("Buy request failed. Check backend or CORS settings.");
    }
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
