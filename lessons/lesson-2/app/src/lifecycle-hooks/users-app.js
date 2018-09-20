import React, {Component} from 'react';
import {UsersList} from './users-list';

class UsersApp extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch('/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({
          users,
        });
      });
  };

  render() {
    const {
      users
    } = this.state;

    return (
      <div className="users-app">
        <UsersList users={users} getUsers={this.getUsers}/>
      </div>
    );
  }
}

export default UsersApp;
