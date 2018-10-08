import React, { Component } from 'react';

const Authentication = (WrappedComponent) => class extends Component {
  render() {
    return (
        <WrappedComponent />
    );
  }
}

export default Authentication;
