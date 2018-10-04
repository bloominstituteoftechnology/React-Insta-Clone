import React from "react";
import dummyData from "./dummy-data";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import CommentSection from "./components/CommentSection/CommentSection";

class App extends React.Component {
  constructor() {
    super();
    this.state = dummyData;
  }

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
