import React from "react";
import Login from "../Login/Login";

const authenticate = WrappedComponent => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        username: "",
        password: "",
        loggedIn: false
      };
    }

    componentDidMount() {
      const user = JSON.parse(localStorage.getItem(this.state.username));
      console.log(user);
      if (user) {
        this.setState({ loggedIn: true });
      }
    }

    loginSubmit = event => {
      event.preventDefault();
    //   console.log("works");
      console.log(this.state.username);
      console.log(this.state.password);
      console.log(this.state.loggedIn);

      localStorage.setItem(
        this.state.username,
        JSON.stringify(this.state.password)
      );
    };

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    render() {
      
      return (
        <React.Fragment>
          <Login
            loginSubmit={this.loginSubmit}
            handleChange={this.handleChange}
          />
          <WrappedComponent />
        </React.Fragment>
      );
    }
  };
};

export default authenticate;

// loginSubmit={this.loginSubmit}
