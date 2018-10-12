import React, { Component } from 'react';
import Login from '../components/Login/Login';

const Authenticate = App => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem('username')) {
      this.setState({
        loggedIn: false
      });}
      else {
        this.setState({
          loggedIn:true
        });
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <App />;
      }
      else {
        return <Login />
      }
    }
  };
}

export default Authenticate;