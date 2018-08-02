import React from 'react';
import Start from './components/Start/Start'

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
      localStorage.setItem('username', username)
      this.setState({ username })
    }
  
    handleLogOut = () => {
      localStorage.removeItem('username')
      this.setState({username: ''})
    }

    render() {
        return (this.state.username) 
        ? <App username={this.state.username} handleLogOut={this.handleLogOut}/>
        : <Start handleLogIn={this.handleLogIn}/>
    }
  }

  export default Authenticate;