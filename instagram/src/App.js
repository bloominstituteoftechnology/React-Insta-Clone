import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data.js";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar.js";
/* import CommentSection from "./components/CommentSection/CommentSection";
import SearchBar from "./components/SearchBar/SearchBar";
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: []
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer posts={this.state.data} />
      </div>
    );
  }
}

export default App;
