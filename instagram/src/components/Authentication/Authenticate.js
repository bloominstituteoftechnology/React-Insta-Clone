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
      searchInput: "",
      usernameInput: ""
    };
  }

  handleSearchInput = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  componentDidMount() {
    if (localStorage.getItem("user")) {
      this.setState({
        loggedIn: true
      });
    } else {
      this.setState({
        loggedIn: false
      });
    }

    window.addEventListener("load", () => {
      setTimeout(() => {
        if (!this.state.loggedIn) {
          alert(
            "This is a test app using React. Use any username and password to sign up."
          );
        }
      }, 1000);
    });
  }

  handleSignupState = e => {
    e.preventDefault();
    // this.setState({
    //   loggedIn: true
    // });

    localStorage.setItem("user", this.state.usernameInput);
    window.location.reload();
  };

  handleLoginInput = e => {
    e.preventDefault();
    this.setState({
      usernameInput: e.target.value
    });
  };
  render() {
    if (this.state.loggedIn === false) {
      return (
        <LoginPage
          handleSignupState={this.handleSignupState}
          handleLoginInput={this.handleLoginInput}
          usernameInput={this.state.usernameInput}
        />
      );
    } else {
      return (
        <React.Fragment>
          <SearchBar
            searchInput={this.state.searchInput}
            handleSearchInput={this.handleSearchInput}
          />
          <PostsPage searchInput={this.state.searchInput} />
        </React.Fragment>
      );
    }
  }
}

export default Auth;
