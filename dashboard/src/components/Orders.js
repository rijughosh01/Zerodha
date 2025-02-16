import React from "react";
import './Orders.css';

const Orders = () => {
  const instruments = [
    "RELIANCE", "TATASTEEL", "HDFCBANK", "INFY", "SBIN",
    "BANKNIFTY", "TCS", "ICICIBANK", "ITC", "LT",
    "HINDUNILVR", "AXISBANK", "MARUTI", "KOTAKBANK", "ASIANPAINT",
    "HCLTECH", "BAJFINANCE", "ULTRACEMCO", "WIPRO", "ADANIPORTS",
    "JSWSTEEL", "TITAN", "BAJAJFINSV", "BHARTIARTL", "M&M",
    "BPCL", "DIVISLAB", "HEROMOTOCO", "ONGC", "NTPC"
  ];

  while (instruments.length < 1000) {
    instruments.push(...instruments.slice(0, 1000 - instruments.length));
  }

  const ordersData = instruments.map((instrument, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    const formattedDate = date.toISOString().split('T')[0];
    return {
      createdOn: formattedDate,
      instrument: instrument,
      type: index % 2 === 0 ? 'SELL' : 'BUY',
      trigger: (1000 + index * 10).toFixed(2),
      ltp: (900 + index * 10).toFixed(2),
      quantity: Math.floor(Math.random() * 100),
      status: 'ACTIVE'
    };
  });

  return (
    <div className="orders">
      <div className="orders-header">
        <h2>GTT (3)</h2>
        <button className="new-gtt-btn">New GTT</button>
        <input type="text" className="search-bar" placeholder="Search" />
        <button className="download-btn">Download</button>
      </div>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Created on</th>
            <th>Instrument</th>
            <th>Type</th>
            <th>Trigger</th>
            <th>LTP</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order, index) => (
            <tr key={index}>
              <td>{order.createdOn}</td>
              <td>{order.instrument}</td>
              <td><span className={`order-type ${order.type.toLowerCase()}`}>{order.type}</span></td>
              <td>{order.trigger}</td>
              <td>{order.ltp}</td>
              <td>{order.quantity}</td>
              <td><span className="status active">{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
