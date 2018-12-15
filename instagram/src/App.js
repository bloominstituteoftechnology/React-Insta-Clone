import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      comments: []
    };
  }
  liked = (e, i) => {
    let array = this.state.posts;
    array[i].likes += 1;
    this.setState({
      posts: array
    });
  };
  componentDidMount() {
    this.setState({
      posts: dummyData.map(e => {
        return {
          username: e.username,
          thumbnailUrl: e.thumbnailUrl,
          imageUrl: e.imageUrl,
          likes: e.likes,
          timestamp: e.timestamp
        };
      }),
      comments: dummyData.map(e => {
        return e.comments;
      })
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="brand">
            <span className="brand__logo">
              <i className="fas fa-camera-retro" />
            </span>
            <span className="brand__line">│</span>
            <span className="brand__title">Instaclone</span>
          </div>
          <SearchBar />
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </header>
        <PostContainer
          like={this.liked}
          posts={this.state.posts}
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default App;
