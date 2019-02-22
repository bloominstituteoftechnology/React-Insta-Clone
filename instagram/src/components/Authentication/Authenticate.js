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

    componentDidUpdate() {
      const pass = JSON.parse(localStorage.getItem(this.state.username));
      console.log(pass);
      if (pass === this.state.password && this.state.loggedIn === false) {
        this.setState({ 
            loggedIn: true, 
            username: "",
            password: ""
        });
      }
    }

    loginSubmit = event => {
      event.preventDefault();
      console.log("works");
      console.log(this.state.username);
      console.log(this.state.password);
      console.log(this.state.loggedIn);

      localStorage.setItem(
        this.state.username, JSON.stringify(this.state.password)
      );

      // window.location.reload();
        
      this.setState({
  
      });

    };

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    render() {
        if(this.state.loggedIn === false){
            return <Login
            loginSubmit={this.loginSubmit}
            handleChange={this.handleChange}
          />;
        }if(this.state.loggedIn === true){
            return <WrappedComponent />;
        }
    }
  };
};

export default authenticate;

// loginSubmit={this.loginSubmit}
