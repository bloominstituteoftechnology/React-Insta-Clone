import React from 'react'
import Login from './login.js'

const Authenticate = App =>
  class extends React.Component {
    constructor(App) {
      super(App);
      this.state = {
        loggedIn: false,
        username: "",
        password: ""
      }
    }

    componentDidMount() {
      let user = localStorage.getItem('user')
      if (user != null) {
        this.setState({loggedIn: true})
      }
    }

    logIn = e => {
      if (this.state.username !== "" && this.state.password !== "") {
        localStorage.setItem('user', this.state.username)
      }
      window.location.reload();
    }

    setUser = e => {
      this.setState({username: e.target.value})
    }

    setPass = e => {
      this.setState({password: e.target.value})
    }

    render() {
      if (this.state.loggedIn === true) {
        return <App />;
      } else {
        return <Login logIn={this.logIn} setPass={this.setPass} setUser={this.setUser} />;
      }
    }
  };

  export default Authenticate;
