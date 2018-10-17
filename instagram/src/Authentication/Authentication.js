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
      const user = localStorage.getItem('username');
			const pw = localStorage.getItem('password');
			if (user && pw) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
    }

    render() {
      if (this.state.loggedIn == true) {
				return <App />;
			} else {
				return <Login />;
			}
      
    }
}
  
  
  export default Authenticate;
