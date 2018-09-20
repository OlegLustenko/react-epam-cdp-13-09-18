import React, { Component } from "react";

export class Counter extends Component {
  state = {
    counter: 0,
    name: "QWERTY"
  };

  increment = () => {
    this.state.counter++;
    if (this.state.counter % 2 === 0) {
      this.setState({
        counter: this.state.counter + 2
      });
    }
  };

  decrement = () => {
    this.setState(
      {
        counter: this.state.counter - 1
      },
      () => {
        console.log("SET STATE IS DONE");
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>INCREMENT</button>
        <p>{this.state.counter}</p>
        {this.state.name}
        <button onClick={this.decrement}>DECREMENT</button>
        <button onClick={this.decrement}>DECREMENT</button>
        <button onClick={this.decrement}>DECREMENT</button>
        <button onClick={this.decrement}>DECREMENT</button>
        <button onClick={this.decrement}>DECREMENT</button>
      </div>
    );
  }
}
