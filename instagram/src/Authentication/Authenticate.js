import React, { Component } from 'react';


const Authenticate = WrappedComponent => {
  return class  extends Component {
    render() {
      return (
        <WrappedComponent />
      )
    }

  }
}

export default Authenticate;