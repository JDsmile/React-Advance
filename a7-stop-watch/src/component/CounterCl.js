import React from "react";
export default class CounterCl extends React.Component {
  state = {
    counter: 0,
  };

  increaseCount = () => {
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  };

  decreaseCount = () => {
    this.setState((prev) => {
      return { counter: prev.counter - 1 };
    });
  };

  render() {
    return (
      <>
        <div className="count__container">
          <h2>Count: {this.state.counter}</h2>
          <div>
            <button onClick={this.increaseCount}>+</button>
            <button onClick={this.decreaseCount}>-</button>
          </div>
        </div>
      </>
    );
  }
}
