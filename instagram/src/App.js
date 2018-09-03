import React, { Component } from "react";
import PostsPage from "./components/PostContainer/PostsPage"
import Authenticate from "./components/Authentication/Authenticate";
/* import CommentSection from "./components/CommentSection/CommentSection";
import SearchBar from "./components/SearchBar/SearchBar";
 */
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({username: user});
  }

  render() {
    return (
      <div className="App">
        <PostsPage/>
      </div>
    )
  }
};
export default Authenticate(App);
