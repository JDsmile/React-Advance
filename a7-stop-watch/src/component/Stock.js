import React from "react";
import { useCounter } from "../hooks/useCount";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./countSlice";

export default function Stock() {
  const [number, buy, sell] = useCounter(9);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count);

  return (
    <>
      <div className="stock_container">
        <h2>Stock {counter}</h2>
        <div>
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            Buy
          </button>
          <button onClick={() => dispatch(decrement())}>sell</button>
        </div>
      </div>
    </>
  );
}
