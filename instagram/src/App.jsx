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
      posts: [],
      searchText: "",
      filteredPosts: [],
      username: "tomtarpey"
    };
  }

  // on mounting the component load in the state data for day 2 mvp goal
  componentDidMount() {
    //this.setState({ posts: dummyData });
    if (window.localStorage.getItem("comments")) {
      this.setState({
        posts: JSON.parse(window.localStorage.getItem("comments"))
      });
    } else {
      this.setState({ posts: dummyData });
    }
    window.localStorage.setItem("comments", JSON.stringify(dummyData));
  }

  // searchHandler method DAY 2 MVP Goal
  searchHandler = event => {
    // set the searchText to the current input value
    this.setState({ searchText: event.target.value });

    // loop every 30ms
    setTimeout(() => {
      // filter the posts using the searchText for username
      const posts = this.state.posts.filter(post => {
        return post.username.includes(this.state.searchText) ? post : null;
      });

      // only render the posts if there are any
      if (posts.length > 0) {
        this.setState({ filteredPosts: posts });
      } else {
        return;
      }
    }, 30);
  };

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
            <PostContainer data={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
