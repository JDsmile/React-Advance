import React from "react";
import { useCounter } from "../hooks/useCount";
export default function Counter() {
  const [count, increaseCount, decreaseCount] = useCounter(0);

  return (
    <>
      <div className="count__container">
        <h2>Count: {count}</h2>
        <div>
          <button onClick={increaseCount}>+</button>
          <button onClick={decreaseCount}>-</button>
        </div>
      </div>
    </>
  );
}
