import React, {Component} from 'react';

export class Header extends Component {

  shouldComponentUpdate() {

  }

  render() {
    return (
      <header style={{display: 'flex', justifyContent: 'space-between'}}>
        {this.props.left}
        {this.props.right}
      </header>
    );
  }
}
