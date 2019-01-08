import React from 'react';
import App from '../App.js';
import Login from '../components/Login/Login'

const Authenticate = Component => {
  class Page extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedIn: false,
      }
    }

    login = () => {
      this.setState(prev => {
        return {loggedIn: !prev.loggedIn}
      })
    }

    render() {
      if(this.state.loggedIn) {
        console.log(<App />)
        return <App />
      }
      console.log(<App />)
      return <Login login={this.login} />
    }
  };

  return Page;
}

export default Authenticate;
