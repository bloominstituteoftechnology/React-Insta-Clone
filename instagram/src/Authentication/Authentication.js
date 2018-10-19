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
      !localStorage.getItem('user') ? this.setState({ loggedIn: false }) :
      this.setState({ loggedIn: true });

			// if (!localStorage.getItem('user')) {
			// 	this.setState({ loggedIn: false });
			// } else {
			// 	this.setState({ loggedIn: true });
			// }
    }

    render() {
      if (this.state.loggedIn) return <App />;
        return <Login />;
    }
}
  
  
  export default Authenticate;
