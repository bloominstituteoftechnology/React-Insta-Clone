import React from "react";
import Login from "../Login/Login";
import PostsPage from "../PostsContainer/PostsPage";

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (localStorage.getItem("user")) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }
    render() {
      if (this.state.loggedIn) {
        return <App />;
      } else {
        return <Login />;
      }
    }
  };

export default Authenticate;
