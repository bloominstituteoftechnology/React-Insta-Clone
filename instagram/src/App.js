import React, { Component } from "react";
import "./App.css";
import PostContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import dummyData from "./dummy-data.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      input: ""
    };
  }
  searchInputHandler = event => {
    const value = event.target.value;
    this.setState({
      input: value
    });
  };
  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }
  searchHandler = event => {
    if (event.key === "Enter") {
      this.setState({
        data: this.state.data.filter(post => {
          return post.username === this.state.input;
        })
      });
      event.target.value = "Search";
      event.target.classList.remove("no-background");
    }
  };

  render() {
    return (
      <>
        <SearchBar
          posts={this.state.data}
          searchHandler={this.searchHandler}
          searchInputHandler={this.searchInputHandler}
        />
        {this.state.data.map(post => {
          return (
            <PostContainer
              thumbnail={post.thumbnailUrl}
              username={post.username}
              imageUrl={post.imageUrl}
              likes={post.likes}
              time={post.timestamp}
              data={this.state.data}
              comments={post.comments}
              key={Math.random()}
            />
          );
        })}
      </>
    );
  }
}

export default App;
