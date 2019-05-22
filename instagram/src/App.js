import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostsContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      liked: false
    };
  }

  handleLikes = id => {
    const selected = this.state.data.filter(post => post.id === id);

    const newPost = {
      id: selected[0].id,
      username: selected[0].username,
      thumbnailUrl: selected[0].thumbnailUrl,
      likes: this.state.liked ? selected[0].likes -1: selected[0].likes +1,
      timestamp: selected[0].timestamp,
      comments: selected[0].comments,
      imageUrl: selected[0].imageUrl
    };
    const filteredData = this.state.data.map(post => {
      if (post.id !== id) {
        return post;
      } else {
        console.log(newPost);
        return newPost;
      }
    });

    this.setState({ data: [...filteredData], liked: !this.state.liked});
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.data} handleLikes={this.handleLikes} />
      </div>
    );
  }
}

export default App;
