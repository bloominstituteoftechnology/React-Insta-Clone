import React from 'react';
import LogIn from './components/LogIn/LogIn'

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        username: ''
      }
    }

    componentDidMount() {
      let username = localStorage.getItem('username');
      this.setState({ username })
    }

    handleLogIn = (username) => {
      this.setState({ username })
    }
  
    handleLogOut = () => {
      this.setState({username: ''})
    }

    render() {
        return (this.state.username) 
        ? <App username={this.state.username} handleLogOut={this.handleLogOut}/>
        : <LogIn handleLogIn={this.handleLogIn}/>
    }
  }

  export default Authenticate;