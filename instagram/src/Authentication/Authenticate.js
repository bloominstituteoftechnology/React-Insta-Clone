import React from 'react';
import Login from '../components/LoginPage/Login';

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        username: '',
        loggedIn: false,
      };
    }

    inputHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }
  
    login = (e) => {
      const user = this.state.username;
      localStorage.setItem('user', user);
      window.location.reload();
    }

    componentDidMount() {
      if (localStorage.getItem('user')) {
        this.setState({loggedIn: true})
      }
    }

    render() {
      if ( this.state.loggedIn) {
        return <App />;
      }
      return <Login login={this.login} inputHandler={this.inputHandler}/>
    }
  }

export default Authenticate;