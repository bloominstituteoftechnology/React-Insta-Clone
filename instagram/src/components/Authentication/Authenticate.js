import React, { Component } from 'react'

const Authenticate = App => Login =>
  class extends Component {
    constructor() {
      super()
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {
      if (localStorage.getItem('username')) {
        this.setState({ loggedIn: true })
      }
    }

    login = username => {
      localStorage.setItem('username', username)
      console.log(username)
      window.location.reload()
    }

    render() {
      const { loggedIn } = this.state
      const { login } = this

      return loggedIn ? <App /> : <Login login={login} />
    }
  }

export default Authenticate
