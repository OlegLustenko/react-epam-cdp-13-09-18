import React, {Component} from 'react';
import {withState, withHandlers, lifecycle, compose, withProps} from 'recompose';

// compose => f => g => h

// const add10 = x => y => x + y;
// const qwe = compose(add10);
// qwe(20)(30)
import './users-list.css';

export class UsersListComponent extends Component {
  static defaultProps = {
    users: [{fname: 'test', lname: 'test', id: '0'}]
  };

  renderUsers() {
    return this.props.users.map((user, index) => (
      <li className="users-list-item" key={user.lname + index}>
        <div>fname: {user.fname}</div>
        <div>lname: {user.lname}</div>
      </li>
    ));
  }

  render() {
    const {
      isLoading,
      setLoadingState,
      setUnloading
    } = this.props;

    return (
      <React.Fragment>
        <button onClick={setLoadingState}>Refresh</button>
        {isLoading && 'Loading...'}
        <ul className="users-list">{this.renderUsers()}</ul>
      </React.Fragment>
    );
  }
}

const withLoading = compose(
  withState('isLoading', 'setLoadingState', false),
  withHandlers({
    setLoadingState: ({setLoadingState, getUsers}) => () => {
      setLoadingState(true, getUsers);
    },
    setUnloading: ({setLoadingState, getUsers}) => () => {
      setLoadingState(false);
    }
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.users !== this.props.users) {
        this.props.setUnloading();
      }
    }
  }),
);

export const UsersList = withLoading(UsersListComponent);
