import React, { Component } from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

class Hello extends Component {
  render() {
    return (
      <div className="Hello">
        <h3>
          Hello, {formatName(user)}!
        </h3>
      </div>
    );
  }
}

export default Hello;
