import React from "react";
import Login from "../Login/Login";
import PostsPage from "../PostContainer/PostsPage";

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: null
      };
    }
    componentDidMount() {
      if (typeof localStorage.getItem("username") === "string") {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }
    componentDidUpdate() {}
    render() {
      if (this.state.loggedIn === true) {
        return <PostsPage />;
      } else {
        return <Login />;
      }
    }
  };

export default Authenticate;
