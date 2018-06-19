import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      appData: []
    };
  }
  componentDidMount() {
    this.setState({ appData: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="container">
          {this.state.appData.map(post => (
            <PostContainer
              key={post.username}
              username={post.username}
              thumbnail={post.thumbnailUrl}
              image={post.imageUrl}
              likes={post.likes}
              timestamp={post.timestamp}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
