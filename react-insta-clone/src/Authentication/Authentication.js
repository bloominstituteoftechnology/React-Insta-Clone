import React, { Component } from 'react';
import Login from '../components/Login/Login';

const Authentication = (WrappedComponent) => class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      loginCredentials: [
        {
          username: 'BigBen102912',
          password: 'hello123'
        },
        {
          username: 'AlphaFox23',
          password: 'help123'
        },
        {
          username: 'CharlieTea045',
          password: 'grapes10'
        }
      ],
      loginError: ''
    }
  }
  componentDidMount() {
    if(localStorage.getItem('loggedIn') === null) {
      this.setState({
        loggedIn: false
      })
    }
    else {
    this.setState({
      loggedIn: JSON.parse(localStorage.getItem('loggedIn'))
    })
  }
  }

  login = (e) => {
    e.preventDefault();
    const fields = e.target.childNodes;
    let username = '';
    let password = '';

    fields.forEach(field => {
      if(field.name === 'username') {
        username = field.value;
      }
      if(field.name === 'password') {
        password = field.value;
      }
    })
    this.state.loginCredentials.map(login => {
      if (login.username === username) {
        localStorage.setItem('username', username);
        if(login.password === password) {
          localStorage.setItem('loggedIn', true);
          return this.setState({
            loggedIn: true
          })
        }
        else {
          return this.setState({
            loginError: "Please Enter a Valid User Name and Password"
          })
        }
      }
      else {
        return this.setState({
          loginError: "Please Enter a Valid User Name and Password"
        })
      }
    })
  }

  render() {
    if(this.state.loggedIn === false) {
      return (
        <Login submit={this.login}
        loginError={this.state.loginError}/>
      )
    }
    else {
      return (<WrappedComponent />);
    }
    }
}

export default Authentication;
