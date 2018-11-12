import React from "react";
import { Wrapper } from "./start-styles";
import Login from "./Login";
import SignUp from "./SignUp";

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpTriggered: false,
    };
  }

  handleSwitchScreens = e => {
    e.preventDefault();
    this.setState(prevState => ({
      signUpTriggered: !prevState.signUpTriggered,
    }));
  };

  handleNewProfile = (id, name, username, password) => {
    let error = "";
    // if (this.props.users.some(user => user.id === id)) {
    //   return "This phone number already exists. Log in?";
    // } else if (this.props.users.some(user => user.username === username)) {
    //   return ""
    // }
    if (this.props.users) {
      this.props.users.forEach(user => {
        console.log(user.id, id)
        if (user.id === id) {
          return "This phone number already exists. Log in?";
        } else if (user.username === username) {
          error = "This username is not available.";
        }
      });
    }
    if (error) {
      console.log(error);
      return error;
    } else {
      let user = {
        id: id,
        name: name,
        username: username,
        password: password,
        likedPosts: []
      };
  
      this.props.handleLogIn(user);
    }
  };

  handleLoginSubmit = (username, password) => {
    let error = "";
    if (this.props.users.length > 0) { 
      this.props.users.forEach(user => {
        if (user.username === username && user.password === password) {
          this.props.handleLogIn(user);
        } else {
          error = "Username or password is incorrect.";
        }
      });
    } else {
      error= "Username or password is incorrect."
    }
    return error;
  };

  render() {
    return (
      <Wrapper>
        {this.state.signUpTriggered ? (
          <SignUp
            handleSwitchScreens={this.handleSwitchScreens}
            handleNewProfile={this.handleNewProfile}
          />
        ) : (
          <Login
            handleLoginSubmit={this.handleLoginSubmit}
            handleSwitchScreens={this.handleSwitchScreens}
          />
        )}
      </Wrapper>
    );
  }
}
export default Start;
