import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage"
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
    this,this.setState({username: user});
  }

  render() {
    return (
      <div className="App">
        <PostsPage/>
      </div>
    )
  }
};
export default App;
