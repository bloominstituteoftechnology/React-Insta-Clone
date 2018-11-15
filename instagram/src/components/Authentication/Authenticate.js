import React from 'react';

import Login from '../Login/Login';

const Authenticate = App  => (
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount(){
      const loginInfo = JSON.parse(localStorage.getItem('instaCloneLogin'));
      if (loginInfo && loginInfo.username) {
        this.setState({
          loggedIn: true,
        })
      }
    }


    render () {
      return this.state.loggedIn ?
        <App />
        :
      <Login />
    }
  }
)

export default Authenticate;