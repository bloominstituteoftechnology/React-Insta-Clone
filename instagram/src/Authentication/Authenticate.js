import React from "react";
import PropTypes from "prop-types";
import Login from "../components/Login/Login";
import PostsPage from "../components/PostContainer/PostsPage";

const authenticate = App => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        isLoggedIn: false
      };
    }

    loginButton = user => {
      // e.preventDefault();
      const username = localStorage.setItem("user", user);
      console.log(user);
      this.setState({
        isLoggedIn: true,
        username: username
      });
    };

    render() {
      return !this.state.isLoggedIn ? (
        <Login clicked={this.loginButton} />
      ) : (
        <PostsPage />
      );
    }
  };
};

export default authenticate;
