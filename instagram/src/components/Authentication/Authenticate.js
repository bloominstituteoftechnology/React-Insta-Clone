import React, { Component } from 'react';
import Login from '../Login/Login';

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state ={
        loggedIn: false
    };
  }

  componentDidMount () {
      this.setState ({
          loggedIn: !!localStorage.getItem('username')
      })
  }

  render() {
    const PassedComponent = this.props;
    return class extends React.Component {
      render() {
          if (this.state.loggedIn) {
        return <PassedComponent />;
          }
          else {
              return <Login />
          }
      }
    };
  }
}

export default Authenticate;