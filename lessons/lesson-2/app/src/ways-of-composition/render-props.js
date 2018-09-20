import React, {Component} from 'react';

// render props
export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.initialCounter
    }

  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return this.props.children({
      decrement: this.decrementCounter,
      increment: this.incrementCounter,
      counter: this.state.counter
    });
  }
}
