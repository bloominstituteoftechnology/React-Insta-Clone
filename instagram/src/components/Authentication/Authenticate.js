import React from "react";
import "./Auth.css";
import LoginPage from "./LoginPage";
import SearchBar from "../SearchBar/SearchBar";
import PostsPage from "../PostContainer/PostsPage";

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      hello: "Hello"
    };
  }

  handleSignupState = e => {
    e.preventDefault();
    this.setState({
      loggedIn: true
    });
  };

  render() {
    if (this.state.loggedIn === false) {
      return <LoginPage handleSignupState={this.handleSignupState} />;
    } else {
      return (
        <React.Fragment>
          <SearchBar />
          <PostsPage />
        </React.Fragment>
      );
    }
  }
}

export default Auth;
