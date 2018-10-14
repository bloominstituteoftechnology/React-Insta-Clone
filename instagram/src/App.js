import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  //But the key is that such configuration should be done at the highest level component of your app (the root component). That means 99% of your components should probably not use componentWillMount.

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts = {this.state.posts} />
      </div>
    );
  }
}

export default App;


