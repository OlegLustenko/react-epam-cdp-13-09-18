import React, {Component} from 'react';

import './App.css';

import UsersApp from './lifecycle-hooks/users-app';

import {Counter} from './ways-of-composition/render-props';
import {HOCExample} from './HOC-example/HOCExample';
import AutofocusComponent from './children-inheritance';
import {RouterPage} from './react-router/router-page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterPage/>
      </div>
    );
  }
}

export default App;
