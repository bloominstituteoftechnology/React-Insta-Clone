import React from "react";
import LoginPage from "../components/Login/LoginPage";

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount() {
      if(localStorage.getItem('username')){
        this.setState ({ loggedIn: true })
      } else {
        this.setState ({ loggedIn: false })
      }
    }

    render() {
      if(this.state.loggedIn) {
        //if a user is logged in return the <App />
        return <App />;
      } else {
        //esle, return the <LoginPage>
        return <LoginPage />
      }
     
     
    }
  };

export default Authenticate;