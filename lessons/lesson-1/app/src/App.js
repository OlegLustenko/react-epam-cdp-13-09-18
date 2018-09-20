import React, {Component} from 'react';

import {Counter} from './counter';

import logo from './logo.svg';
import './App.css';

const frameworks = ['React', 'Vue', 'Angular'];

const Avatar = props => {
  console.log('avatar renders');
  return <div>{props.children}</div>;
};

Avatar.defaultProps = {};

class Header extends React.Component {
  state = {
    name: 'default state name',
  };

  static defaultProps = {
    userName: '[default Name]',
  };

  render() {
    return (
      <div>
        <h1>Hello {this.props.userName}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={() => {
          this.setState({
            name: 'React',
          });
        }}>update name
        </button>
        <Avatar/>
      </div>
    );
  }
}

export function App(props) {
  return (
    <React.Fragment>
      <Header/>
    </React.Fragment>
  );
}
