import React from 'react';
import LoginPage from '../components/Login/LoginPage'

const Authenticate = App =>  
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isLoggedIn : false
      };
    }

    componentDidMount() {
      if(!localStorage.getItem('username')) {
        this.setState({isLoggedIn : false})
      } else {
        this.setState({isLoggedIn :  true})
      }
    }

    render() {
      if (this.state.isLoggedIn) return <App />;
      return <LoginPage />
    }
  };

  export default Authenticate;