import React from 'react';
import Login from '../components/login/login';

const Authenticate = WrappedComponent => { // Authenticate is taking in a component as an arg.
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {
      if(!localStorage.getItem('currentUser')) {
        this.setState({loggedIn: false});
      } else {
        this.setState({loggedIn: true});
      }
    }

    render() {
      if(this.state.loggedIn) return <WrappedComponent />
      else return <Login />
    }
  }
}

export default Authenticate;