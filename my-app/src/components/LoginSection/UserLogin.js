import React from 'react';
import Login from '../LoginSection/Login';

const UserLogin = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (this.state.loggedIn) return <App />;
      return <Login />;
    }
  };

export default UserLogin;
