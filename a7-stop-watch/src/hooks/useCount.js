import React from "react";

export function useCounter(init) {
  const [number, setNumber] = React.useState(init);

  const increaseNum = () => {
    setNumber((prev) => prev + 1);
  };
  const decreaseNum = () => {
    setNumber((prev) => prev - 1);
  };
  return [number, increaseNum, decreaseNum];
}
