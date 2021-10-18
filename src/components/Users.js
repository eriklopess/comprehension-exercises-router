// arquivo Users.js
import React, { Component } from 'react';
import StrictAccess from "./StrictAccess";

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    const { username, password } = this.props.match.params;

    return (
      <div>
        <h2>Users</h2>
          { username === "joao" && password == 1234 ? <StrictAccess username={username} />
              : alert('Access denied')}
      </div>
    );
  }
};

export default Users;
