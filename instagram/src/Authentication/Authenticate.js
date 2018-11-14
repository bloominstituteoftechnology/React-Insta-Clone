import React, { Component } from 'react';
import './Authenticate.css'
// import Login from './Login';

const Authenticate = WrappedComponent => {
  return class  extends Component {
    render() {
      return (
        <>
        <div className="login">
          <h1>InstaClone Login</h1>
          <input 
            type="text"
            name="username"
            placeholder="Enter Username"
            />
            <input 
            type="text"
            name="password"
            placeholder="Enter Password"
            />
        </div>
        {/* <WrappedComponent /> */}
        </>
      )
    }

  }
}

export default Authenticate;