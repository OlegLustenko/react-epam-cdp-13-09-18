import React, {Component} from 'react';
import Loadable from 'react-loadable';

// import {RandomUsersApp} from '../random-users/main';

class SplitReact extends Component {
  state = {
    LazyComponent: () => null,
  };

  toggleComponent = () => {
    // const LazyComponent = Loadable({
    //   loader: () => import('../random-users/main'),
    //   loading: () => <div>Loading</div>,
    // });

    import('../random-users/main').then(result => {
      this.setState({
        LazyComponent: result.RandomUsersApp,
      });
    });

  };

  render() {
    const {LazyComponent} = this.state;
    return (
      <div>
        <button onClick={this.toggleComponent}>toggle component</button>
        <LazyComponent/>
      </div>
    );
  }
}

export default SplitReact;
