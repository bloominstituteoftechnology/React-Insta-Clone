import React from 'react';
import LogIn from './components/LogIn/LogIn'

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state= {
        username: ''
      }
    }

    componentDidMount() {
      let username = localStorage.getItem('username');
      this.setState({ username })
    }

    render() {
      console.log(this.state.username)
        return (this.state.username) 
        ? <App />
        : <LogIn />
    }
  }

  export default Authenticate;