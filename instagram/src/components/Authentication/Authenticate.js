import React, { Component } from 'react';
import Login from '../Login/Login';


const Authenticate = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount() {
      if (localStorage.getItem('user')) {
        this.setState({loggedIn: true})
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <App />;
      } else {
      return <Login />;
    }
    }
  };

  export default Authenticate;
