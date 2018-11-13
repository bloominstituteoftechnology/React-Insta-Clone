import React, { Component } from "react";
import PostContainer from "../PostContainer/PostContainer";
import dummyData from "../../dummy-data";
import Fuse from "fuse.js";
import SearchBar from "../SearchBar/SearchBar";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      filtered: []
    };
  }

  componentDidMount() {
    this.setState({ post: dummyData });

    // this.fillStateWithLocalStorage();
    // window.addEventListener("beforeunload", () => this.saveLocalStorage());
    // this.saveLocalStorage();
  }

  // componentWillUnmount() {
  //   window.addEventListener("beforeunload", () => this.saveLocalStorage());
  //   this.saveLocalStorage();
  // }

  // saveLocalStorage() {
  //   for (let key in this.state) {
  //     localStorage.setItem(key, JSON.stringify(this.state[key]));
  //   }
  // }

  // fillStateWithLocalStorage() {
  //   for (let key in this.state) {
  //     if (localStorage.hasOwnProperty(key)) {
  //       let value = localStorage.getItem(key);
  //       try {
  //         value = JSON.parse(value);
  //         this.setState({ [key]: value });
  //       } catch (e) {
  //         this.setState({ [key]: value });
  //       }
  //     }
  //   }
  // }

  filterPosts = ev => {
    var options = {
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 0,
      keys: ["username"]
    };
    var fuse = new Fuse(dummyData, options); // "list" is the item array
    var result = fuse.search(ev.target.value);
    this.setState({ filtered: result });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onChange={this.filterPosts} />
        {(this.state.filtered.length > 0
          ? this.state.filtered
          : this.state.post
        ).map(post => {
          return <PostContainer key={post.imageUrl} post={post} />;
        })}
      </div>
    );
  }
}

export default PostsPage;
