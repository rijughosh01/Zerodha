import React, { useState } from "react";
import "./Orders.css";
import GTT from "./GTT";
import Baskets from "./Baskets";
import SIP from "./SIP";
import Alerts from "./Alerts";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("Orders");

  const instruments = [
    "RELIANCE",
    "TATASTEEL",
    "HDFCBANK",
    "INFY",
    "SBIN",
    "BANKNIFTY",
    "TCS",
    "ICICIBANK",
    "ITC",
    "LT",
    "HINDUNILVR",
    "AXISBANK",
    "MARUTI",
    "KOTAKBANK",
    "ASIANPAINT",
    "HCLTECH",
    "BAJFINANCE",
    "ULTRACEMCO",
    "WIPRO",
    "ADANIPORTS",
    "JSWSTEEL",
    "TITAN",
    "BAJAJFINSV",
    "BHARTIARTL",
    "M&M",
    "BPCL",
    "DIVISLAB",
    "HEROMOTOCO",
    "ONGC",
    "NTPC",
  ];

  while (instruments.length < 1000) {
    instruments.push(...instruments.slice(0, 1000 - instruments.length));
  }

  const ordersData = instruments.map((instrument, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    const formattedDate = date.toISOString().split("T")[0];
    return {
      createdOn: formattedDate,
      instrument: instrument,
      type: index % 2 === 0 ? "SELL" : "BUY",
      product: "CNC",
      trigger: (1000 + index * 10).toFixed(2),
      ltp: (900 + index * 10).toFixed(2),
      quantity: Math.floor(Math.random() * 100),
      status: "ACTIVE",
    };
  });

  const renderContent = () => {
    switch (activeTab) {
      case "GTT":
        return <GTT />;
      case "Baskets":
        return <Baskets />;
      case "SIP":
        return <SIP />;
      case "Alerts":
        return <Alerts />;
      case "Orders":
      default:
        return (
          <div>
            <div className="market-indices">
              <span>NIFTY 50: 15000 ▲0.50%</span>
              <span>SENSEX: 50000 ▲0.60%</span>
            </div>
            <div className="stock-list">
              <span data-change="up">RELIANCE: 2200 ▲0.40%</span>
              <span data-change="down">TATASTEEL: 600 ▲0.30%</span>
              <span data-change="up">HDFCBANK: 1500 ▲0.20%</span>
              <span data-change="down">INFY: 1100 ▼0.10%</span>
              <span data-change="up">SBIN: 350 ▲0.50%</span>
            </div>
            <div className="orders-section">
              <h3>Open Orders (6)</h3>
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Instrument</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>LTP</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersData.slice(0, 6).map((order, index) => (
                    <tr key={index}>
                      <td>{order.createdOn}</td>
                      <td>
                        <span
                          className={`order-type ${order.type.toLowerCase()}`}
                        >
                          {order.type}
                        </span>
                      </td>
                      <td>{order.instrument}</td>
                      <td>{order.product}</td>
                      <td>{order.quantity}</td>
                      <td>{order.ltp}</td>
                      <td>{order.trigger}</td>
                      <td>
                        <span className="status active">{order.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="orders-section">
              <h3>Executed Orders</h3>
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Instrument</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>LTP</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersData.slice(6, 12).map((order, index) => (
                    <tr key={index}>
                      <td>{order.createdOn}</td>
                      <td>
                        <span
                          className={`order-type ${order.type.toLowerCase()}`}
                        >
                          {order.type}
                        </span>
                      </td>
                      <td>{order.instrument}</td>
                      <td>{order.product}</td>
                      <td>{order.quantity}</td>
                      <td>{order.ltp}</td>
                      <td>{order.trigger}</td>
                      <td>
                        <span className="status active">{order.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="orders">
      <div className="topbar">
        <div className="tabs">
          <span
            className={`tab ${activeTab === "Orders" ? "active" : ""}`}
            onClick={() => setActiveTab("Orders")}
          >
            Orders
          </span>
          <span
            className={`tab ${activeTab === "GTT" ? "active" : ""}`}
            onClick={() => setActiveTab("GTT")}
          >
            GTT
          </span>
          <span
            className={`tab ${activeTab === "Baskets" ? "active" : ""}`}
            onClick={() => setActiveTab("Baskets")}
          >
            Baskets
          </span>
          <span
            className={`tab ${activeTab === "SIP" ? "active" : ""}`}
            onClick={() => setActiveTab("SIP")}
          >
            SIP
          </span>
          <span
            className={`tab ${activeTab === "Alerts" ? "active" : ""}`}
            onClick={() => setActiveTab("Alerts")}
          >
            Alerts
          </span>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default Orders;
