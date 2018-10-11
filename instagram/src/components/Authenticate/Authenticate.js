import React from "react";
import Login from "../Login/Login";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        username: "",
        password: ""
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    changeHandler = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    signIn = event => {
      const user = this.state.username;
      localStorage.setItem("user", user);
      window.location.reload();
    };

    render() {
      if (this.state.loggedIn) return <App />;
      else {
        return (
          <Login
            changeHandler={this.changeHandler}
            signIn={this.signIn}
            username={this.state.username}
            password={this.state.password}
          />
        );
      }
    }
  };

export default Authenticate;
