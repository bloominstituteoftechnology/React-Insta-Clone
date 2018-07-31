import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import CommentSection from "./components/CommentSection/CommentSection";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className="container">
        <SearchBar />

        {/* <section className="container"/>
        {this.state.data.map((post-container, i) => <post-container.key= { i } {...e}/>)} */}

        <PostContainer toes={this.state.data} />
        <CommentSection />
      </div>
    );
  }
}

export default App;
