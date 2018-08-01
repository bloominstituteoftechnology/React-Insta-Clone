import React, { Component } from 'react';

import Login from '../Login/Login';

const Authenticate = App => class extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      username: '',
      password: ''        
    }
  }

  componentDidMount() {
    if (window.localStorage.length !== 0) {
      this.setState({ isLoggedIn: true });
    } 
  }

  handleLogin(e) {
    e.stopPropagation();
    e.preventDefault();

    const parent = e.target.parentNode;
    const username = parent.children[1].value;
    const password = parent.children[2].value;

    window.localStorage.setItem('username', username);
    window.localStorage.setItem('password', password);

    this.setState({
      isLoggedIn: true,
      username: username,
      password: password
    })
  }
  
  render() {
    return (
      <div>
        { this.state.isLoggedIn === true 
          ? <App />
          : <Login handleLogin={this.handleLogin.bind(this)} />
        }
      </div>
    )
  }
}

export default Authenticate;