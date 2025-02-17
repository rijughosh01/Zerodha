import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    //Instrument names
    const instrumentNames = [
      "BHARTIARTL", "HDFCBANK", "HINDUNILVR", "INFY", "ITC",
      "KPITTECH", "M&M", "RELIANCE", "SBIN", "SGBMAY29",
      "TATAPOWER", "TCS", "WIPRO", "ADANIGREEN", "ASIANPAINT",
      "AXISBANK", "BAJFINANCE", "BPCL", "BRITANNIA", "CIPLA",
      "COALINDIA", "DIVISLAB", "DRREDDY", "EICHERMOT", "GAIL",
      "GRASIM", "HCLTECH", "HEROMOTOCO", "HINDALCO", "ICICIBANK",
      "INDUSINDBK", "IOC", "JSWSTEEL", "KOTAKBANK", "LT",
      "MARUTI", "NESTLEIND", "NTPC", "ONGC", "POWERGRID",
      "SBILIFE", "SHREECEM", "SUNPHARMA", "TATACONSUM", "TATASTEEL",
      "TECHM", "TITAN", "ULTRACEMCO", "UPL", "VEDL",
      "YESBANK", "ZEEL", "ABBOTINDIA", "ADANIPORTS", "AMBUJACEM",
      "AUROPHARMA", "BAJAJFINSV", "BANDHANBNK", "BANKBARODA", "BEL",
      "BERGEPAINT", "BIOCON", "BOSCHLTD", "CADILAHC", "CANBK",
      "CASTROLIND", "CHOLAFIN", "CUB", "DALBHARAT", "DABUR",
      "DEEPAKNTR", "DHFL", "DLF", "EDELWEISS", "ESCORTS",
      "EXIDEIND", "FEDERALBNK", "FORTIS", "GODREJCP", "GODREJIND",
      "GODREJPROP", "HAVELLS", "HINDCOPPER", "HINDPETRO", "IBULHSGFIN",
      "IDBI", "IDEA", "IDFCFIRSTB", "IRCTC", "ITI",
      "JINDALSTEL", "JUBLFOOD", "L&TFH", "LICHSGFIN", "LUPIN",
      "MFSL", "MOTHERSUMI", "MPHASIS", "MRF", "NAM-INDIA",
      "NIACL", "NMDC", "OBEROIRLTY", "PEL", "PIIND",
      "PNB", "PRESTIGE", "RBLBANK", "RECLTD", "SBICARD",
      "SRF", "SRTRANSFIN", "STAR", "SUNTV", "SYMPHONY",
      "TATACHEM", "TATAELXSI", "TATACOMM", "TRENT", "TV18BRDCST",
      "TVSMOTOR", "UBL", "UNIONBANK", "VBL", "VOLTAS",
      "WELCORP", "YESBANK", "ZEEL", "ZYDUSWELL"
    ];

    // Generate dummy data 
    let dummyData = [];
    for (let i = 0; i < 260; i++) {
      dummyData.push({
        name: instrumentNames[i % instrumentNames.length],
        qty: Math.floor(Math.random() * 100) + 1,
        avg: parseFloat((Math.random() * 1000).toFixed(2)),
        price: parseFloat((Math.random() * 1000).toFixed(2)),
        net: `${(Math.random() * 100).toFixed(2)}%`,
        day: `${(Math.random() * 10).toFixed(2)}%`,
        isLoss: Math.random() > 0.5,
      });
    }
    setAllHoldings(dummyData);

    axios.get("https://my-backend-phi.vercel.app/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
