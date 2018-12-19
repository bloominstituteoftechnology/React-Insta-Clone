import React from 'react';
import Login from '../components/login/login';

const Authenticate = WrappedComponent => { // Authenticate is taking in a component as an arg.
  return class extends React.Component {
    render() {
      const user = localStorage.getItem('currentUser');
      if(user) return <WrappedComponent />
      else return <Login />
    }
  }
}

export default Authenticate;