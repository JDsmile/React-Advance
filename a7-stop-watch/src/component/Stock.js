import React from "react";
import { useCounter } from "../hooks/useCount";

export default function Stock() {
  const [number, buy, sell] = useCounter(9);

  return (
    <>
      <div className="stock_container">
        <h2>Stock {number}</h2>
        <div>
          <button onClick={buy}>Buy</button>
          <button onClick={sell}>sell</button>
        </div>
      </div>
    </>
  );
}
