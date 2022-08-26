import React from "react";
import { useCounter } from "../hooks/useCount";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./countSlice";
export default function Counter() {
  const [counter, increaseCount, decreaseCount] = useCounter(0);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="count__container">
        <h2>Count: {count}</h2>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </div>
    </>
  );
}
