import React, {Component} from 'react';
import {connect} from 'react-redux';

import {increment, incrementAsync} from './actions';
import logo from './logo.svg';
import './App.css';

export class AppComponent extends Component {
  state = {
    value: ''
  };

  render() {
    const {counter, increment, incrementAsync} = this.props;

    return (
      <div className="App">
        <h1>COUNTER</h1>
        <button
          onClick={() => {
            increment(100);
          }}>
          INCREMENT
        </button>
        <p>
          state of counter: <span>{counter}</span>
        </p>
        <button
          onClick={() => {
            increment(-100);
          }}>
          DECREMENT
        </button>
        <button onClick={incrementAsync}>ASYNC INCREMENT</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter
  };
};

const mapDispatchToProps = {
  increment,
  incrementAsync
};

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
