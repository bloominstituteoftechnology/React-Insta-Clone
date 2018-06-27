import React, { Component } from "react";
import "/Users/Dan/Documents/Lambda/React/React-Insta-Clone/instagram/src/App.css";
import dummyData from "/Users/Dan/Documents/Lambda/React/React-Insta-Clone/instagram/src/dummy-data.js";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: ""
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchHandler = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredSearch = this.state.posts.filter(post => {
      return post.username.toLowerCase().indexOf(search) !== -1;
    });

    return (
      <div className="App">
        <SearchBar search={this.searchHandler} />
        {filteredSearch.map((post, i) => <PostContainer key={i} post={post} />)}
      </div>
    );
  }
}

export default App;
