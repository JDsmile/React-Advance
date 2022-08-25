import React from "react";

export default function StopWatch() {
  const [timer, setTimer] = React.useState(0);
  const [startTimer, setStartTimer] = React.useState(false);
  React.useEffect(() => {
    let interval = null;
    if (startTimer) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [startTimer]);
  return (
    <>
      <div className="timer__container">
        <h2>Functional Component</h2>
        <br />
        <div>
          <span>{("0" + (Math.floor(timer / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + (Math.floor(timer / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((timer / 10) % 1000)).slice(-2)}</span>
        </div>
        <br />
        <div>
          <button
            onClick={() => {
              setStartTimer(true);
            }}
          >
            START
          </button>
          <button
            onClick={() => {
              setStartTimer(false);
            }}
          >
            PAUSE
          </button>
          <button
            onClick={() => {
              setStartTimer(false);
              setTimer(0);
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
}
