import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import CommentSection from "./components/CommentSection/CommentSection";

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  // on mounting the component load in the state data for day 2 mvp goal
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  // TODO: searchHandler method
  searchHandler = event => {};

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>
            <div className="instaclone-logo">
              <i className="fab fa-instagram" />
              <p>Instagram</p>
            </div>
            <SearchBar searchHandler={this.searchHandler} />
            <div className="social-icons">
              <i className="far fa-compass" />
              <i className="far fa-heart" />
              <i className="far fa-user" />
            </div>
          </header>
            <div className="posts-wrapper">
              <PostContainer data={this.state.posts} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
