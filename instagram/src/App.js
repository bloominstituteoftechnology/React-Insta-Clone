import React, { Component } from "react";
import "./App.css";
import Fuse from "fuse.js";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";
import PostsPage from "./components/PostContainer/PostsPage";
import PostContainer from "./components/PostContainer/PostContainer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import {
  faComment,
  faHeart,
  faUser,
  faCompass,
  faTimesCircle
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(
  faInstagram,
  faComment,
  faHeart,
  faUser,
  faCompass,
  faEllipsisH,
  faSearch,
  faTimesCircle
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      filtered: []
    };
  }

  componentDidMount() {
    this.setState({ post: dummyData });

    this.fillStateWithLocalStorage();
    window.addEventListener("beforeunload", () => this.saveLocalStorage());
    this.saveLocalStorage();
  }

  componentWillUnmount() {
    window.addEventListener("beforeunload", () => this.saveLocalStorage());
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  fillStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  // filterPosts = ev => {
  //   var updatedList = this.state.post;
  //   updatedList = updatedList.filter(item => {
  //     return item.username.includes(ev.target.value);
  //   });
  //   this.setState({
  //     filtered: updatedList
  //     // searchTerm: ev.target.value
  //   });
  // };

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
    console.log(localStorage);
    return (
      <div className="App">
        <SearchBar onChange={this.filterPosts} />
        <PostsPage post={this.state} />
        {/* {(this.state.filtered.length > 0
          ? this.state.filtered
          : this.state.post
        ).map(item => (
          <PostContainer key={item.imageUrl} post={item} />
        ))} */}
      </div>
    );
  }
}

export default App;
