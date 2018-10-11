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
      hello: "Hello",
      filteredPosts: [],
      filterTarget: "",
      loginTarget: ""
    };
  }

  handleSearchInput = e => {
    this.setState({
      filterTarget: e.target.value
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
  }

  handleSignupState = e => {
    e.preventDefault();
    // this.setState({
    //   loggedIn: true
    // });

    localStorage.setItem("user", this.state.loginTarget);
    window.location.reload();
  };

  handleLoginInput = e => {
    e.preventDefault();
    this.setState({
      loginTarget: e.target.value
    });
  };
  render() {
    if (this.state.loggedIn === false) {
      return (
        <LoginPage
          handleSignupState={this.handleSignupState}
          handleLoginInput={this.handleLoginInput}
          loginTarget={this.state.loginTarget}
        />
      );
    } else {
      return (
        <React.Fragment>
          <SearchBar
            filterTarget={this.state.filterTarget}
            handleSearchInput={this.handleSearchInput}
          />
          <PostsPage filterTarget={this.state.filterTarget} />
        </React.Fragment>
      );
    }
  }
}

export default Auth;
