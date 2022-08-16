import React from "react";

export default class CounterFn extends React.Component {
  state = {
    counter: 0,
  };

  increaseCount = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };

  decreaseCount = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter - 1,
      };
    });
  };

  render() {
    return (
      <>
        <p>Class Componenet</p>
        <section className="container">
          <button onClick={this.increaseCount}>+</button>
          <h1>{this.state.counter}</h1>
          <button onClick={this.decreaseCount}>-</button>
        </section>
      </>
    );
  }
}
