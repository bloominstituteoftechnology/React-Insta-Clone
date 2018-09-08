import React from 'react';

import Login from '../Login/Login'


const Authenticate = PassedComponent =>
  class extends React.Component {
    constructor(){
      super();
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {
      this.setState({
        loggedIn: localStorage.length>0
      })

    }

    render() {
      return this.state.loggedIn
      ? <PassedComponent />
      : <Login />
    }
  };

export default Authenticate




// function withAuthenticate(Component) {
//   return function(props) {
//     return props.login
//     ? <App />
//     : <Login />
//   }
// }
