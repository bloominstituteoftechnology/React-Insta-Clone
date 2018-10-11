import React from "react";
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

    loginButton = e => {
      e.preventDefault();
      const username = localStorage.getItem("user");
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
