import React, { Component } from 'react'
import Login from '../Login/Login';

const Authenticate = App =>
  class extends Component {
    constructor() {
      super()
      this.state = {
        loggedIn: false,
      }
    }
    componentDidMount() {
      const user = localStorage.getItem('username')
      user ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false })
    }
    logout = (event) => {
      event.preventDefault()
      localStorage.clear()
      this.setState({ loggedIn: false })
    }
    render() {
      return(
        <React.Fragment>
          {this.state.loggedIn ? <App logout={this.logout}/> : <Login />}
        </React.Fragment>
      )
    }
  };



export default Authenticate
