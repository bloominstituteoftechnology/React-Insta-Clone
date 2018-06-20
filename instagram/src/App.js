import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

import "./App.css";
import dummyData from "./dummy-data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      posts: null
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  componentDidMount() {
    let posts = dummyData.map(post => {
      return Object.assign({ visible: true }, post);
    });
    this.setState({ posts: posts });
  }

  handleSearchInputChange(event) {
    let text = event.target.value;
    let searchRx = new RegExp(text, "i");
    let posts = this.state.posts.slice();
    posts = posts.map(post => {
      let visibility = false;
      if (searchRx.test(post.username)) {
        visibility = true;
      }
      let returnObj = { visible: visibility };
      return Object.assign(post, returnObj);
    });
    this.setState({
      posts: posts,
      searchInput: text
    });
  }

  filterPostsforVisibility(arr) {
    let filteredArr = arr.filter(post => {
      return post.visible;
    });
    return filteredArr;
  }

  render() {
    let postElems = null;
    let posts = this.state.posts;
    if (posts) {
      posts = this.filterPostsforVisibility(posts);
      postElems = posts.map(post => {
        return <PostContainer key={post.thumbnailUrl} post={post} />;
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <SearchBar
            searchInput={this.state.searchInput}
            handleSearchInputChange={this.handleSearchInputChange}
            handleSearch={this.handleSearch}
          />
        </header>
        {postElems}
      </div>
    );
  }
}

export default App;
