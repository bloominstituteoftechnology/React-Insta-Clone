import React from 'react';
import LoginPage from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        };
    }

    componentDidMount() {
        if (localStorage.getItem('username')) {
            this.setState({ loggedIn: true })
        } 
    }

    logout = () => {
        localStorage.removeItem("username");
        // window.location.reload();
        this.setState({ loggedIn: false });
      } 

    render() {
    return this.state.loggedIn ? <App logoutHandler2={this.logout} /> : <LoginPage /> ;
    }
  };

export default Authenticate;