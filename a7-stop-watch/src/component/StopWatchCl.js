import React from "react";

export default class StopWatchCl extends React.Component {
  state = {
    timer: 0,
    startTimer: false,
  };

  start = () => {
    if (!this.state.startTimer) {
      this.setState({ startTimer: true });
      this.interval = setInterval(() => {
        this.setState((prev) => {
          return { timer: prev.timer + 10 };
        });
      }, 10);
    }
  };

  stop = () => {
    this.setState({ startTimer: false });
    clearInterval(this.interval);
  };

  render() {
    return (
      <>
        <div className="timer__container">
          <h2>Class Component</h2>
          <div>
            <span>
              {("0" + (Math.floor(this.state.timer / 60000) % 60)).slice(-2)}:
            </span>
            <span>
              {("0" + (Math.floor(this.state.timer / 1000) % 60)).slice(-2)}:
            </span>
            <span>{("0" + ((this.state.timer / 10) % 1000)).slice(-2)}</span>
            <br />
          </div>
          <div>
            <button
              onClick={() => {
                this.start();
              }}
            >
              START
            </button>
            <button
              onClick={() => {
                this.stop();
              }}
            >
              PAUSE
            </button>
            <button
              onClick={() => {
                //   clearInterval(this.interval);
                this.setState({ startTimer: false });
                this.setState({ timer: 0 });
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </>
    );
  }
}
