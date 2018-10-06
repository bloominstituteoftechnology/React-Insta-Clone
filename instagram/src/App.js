import React, { Component } from "react";
import "./App.css";
import PostContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import dummyData from "./dummy-data.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }
  render() {
    return (
      <>
        <SearchBar />
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
