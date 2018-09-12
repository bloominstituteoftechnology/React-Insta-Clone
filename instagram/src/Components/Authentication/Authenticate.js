import React from "react";
import Login from '../Login/Login';

const Authenticate = App => {
  class extends React.Component {
    constructor () {
      super();
      this.state = {
        logIn: false;
      }
    }
    
    componentDidMount () {
      if(localStorage.getItem(username != null))
      this.setState({logIn: true})
    }

    render () {
        if(localStorage.getItem(username)) {
            return <Login />
        } 
      return <App />
    }
  }
}

export default Authenticate;