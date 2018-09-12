import React, {Component} from "react";
import Login from '../Login/Login';

const Authenticate = App => {
  class extends Component {
    constructor () {
      super();
      this.state = {
        loggedIn: false
      };
    }
    
    componentDidMount () {
      if(localStorage.getItem('Username' !== null)) {
        this.setState({loggedIn: true})
      }
    }

    render () {
      let output = this.state.loggedIn ? <App /> : <Login />;
      return output;
    }
  }
};

export default Authenticate;