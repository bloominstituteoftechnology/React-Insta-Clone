import React, { Component } from 'react';
import Login from '../Components/Login';


const Authenticate = App => 
  class extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {
      const username = localStorage.getItem('username');
			const password = localStorage.getItem('password');
			if (username && password) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
    }

    render() {
      if(this.state.loggedIn) {
        return <App />
      } else {
        return <Login />
      }
      
    }
  }

  export default Authenticate;
