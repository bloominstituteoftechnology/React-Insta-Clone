import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount () {
      console.log(localStorage.getItem("username"));
      console.log(localStorage.getItem("password"));

     if(localStorage.getItem("username") === null) {
        this.setState({loggedIn: false});
      }
      else {
          this.setState({loggedIn: true});
      }
    }

    render() {
      if(this.state.loggedIn === false) return <Login />;

      return <App />;
    }
  };

export default Authenticate;
