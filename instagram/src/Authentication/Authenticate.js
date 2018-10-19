import React from "react";
import LoginPage from '../components/Login/Login';


//HOC

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    

    render() {
      //If a user is logged in we will return the `<App />`, else we will return the `<LoginPage>`
      if (this.state.loggedIn) return <App />;
      return <LoginPage />
    }
  };

export default Authenticate;
