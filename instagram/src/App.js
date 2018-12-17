import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./data/dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      staticData: [],
      user: "thisUser",
      search: ""
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData, staticData: dummyData });
  }

  searchInput = event => {
    this.setState({ search: event.target.value });
    const searchArray = this.state.staticData;
    if (this.state.search.length === 0)
      return this.setState((prevState, props) => {
        return { posts: searchArray };
      });
    else {
      const resultsArray = searchArray.filter(post => {
        return post.username.includes(this.state.search);
      });
      return this.setState((prevState, props) => {
        return {
          posts: resultsArray
        };
      });
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          changeHandler={this.searchInput}
          searchState={this.state.search}
        />
        <div className={"content"}>
          {this.state.posts.map(post => {
            return (
              <PostContainer
                data={post}
                key={post.timestamp}
                className="post-container"
                user={this.state.user}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
