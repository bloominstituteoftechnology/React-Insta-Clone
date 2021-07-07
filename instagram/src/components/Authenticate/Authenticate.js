import React from 'react';
import LoginPage from "./Login";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      console.log("here")
       if (!localStorage.getItem('user')) {
        // if (localStorage.getItem('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn) return <App />;
      return <LoginPage />;
    }
  };

export default Authenticate;