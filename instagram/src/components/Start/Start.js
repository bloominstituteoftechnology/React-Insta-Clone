import React from "react";
import {Wrapper} from "./start-styles"
import Login from "./Login";
import SignUp from "./SignUp";

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      signUpTriggered: false,
    };
  }

  componentDidMount() {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      this.setState({ users });
    }
  }

  handleSwitchScreens = e => {
    e.preventDefault();
    this.setState(prevState => ({
      signUpTriggered: !prevState.signUpTriggered,
    }));
  };

  handleNewProfile = (id, name, username, password) => {
    let error = "";
    if (this.state.users) {
      this.state.users.forEach(user => {
        if (user.username === username) {
          error === "This username is not available.";
        } else if (user.id === id) {
          error === "This phone number already exists. Log in instead?";
        }
      });
    }
    if (error) {
      return error;
    } else {
      let user = {
        id: id,
        name: name,
        username: username,
        password: password,
        likedPosts: [],
      };
      let users = this.state.users.concat(user);
      this.setState({ users });
      localStorage.setItem("users", JSON.stringify(users));
      this.props.handleLogIn(username);
    }
  };

  handleLoginSubmit = (username, password) => {
    let error = "";
    if (this.state.users) {
      this.state.users.forEach(user => {
        if (user.username === username && user.password === password) {
          this.props.handleLogIn(username);
        } else {
          error = "Username or password is incorrect.";
        }
      });
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
