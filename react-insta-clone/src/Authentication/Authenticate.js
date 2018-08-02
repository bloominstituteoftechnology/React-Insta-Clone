import React from "react";
import Login from "../components/Login/Login";

const Authenticate = App =>
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
      //check if user is found in local storage
    }
    
    render() {
      if (this.state.loggedIn) return <App />;
      return <Login />;
      //authenticate renders either App or Login
    }
  };

export default Authenticate;