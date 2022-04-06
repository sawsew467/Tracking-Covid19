import React from "react";
import "./style.css";

export default function Highlight({ countries, report }) {
  // console.log(report);
  const lastReport = report[report.length - 1];
  // console.log(lastReport);
  return (
    <div className="highlight__container">
      <div className="highlight__cart">
        <p className="cart__title">Số ca nhiễm</p>
        <p className="cart__data">{lastReport.Confirmed}</p>
      </div>
      <div className="highlight__cart">
        <p className="cart__title">Khỏi</p>
        <p className="cart__data">{lastReport.Active}</p>
      </div>
      <div className="highlight__cart">
        <p className="cart__title">Tử vong</p>
        <p className="cart__data">{lastReport.Deaths}</p>
      </div>
    </div>
  );
}
