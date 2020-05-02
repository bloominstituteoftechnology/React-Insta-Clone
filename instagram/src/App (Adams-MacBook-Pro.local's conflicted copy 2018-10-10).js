import React, { Component } from "react";
import "./App.css";
import dummyData from "./components/dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/Searchbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredposts: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: dummyData });
    }, 800);
  }

  searchFilter = event => {
    console.log(event.target.value);
    const posts = this.state.data.filter(name => {
      if (name.username.includes(event.target.value)) {
        return name;
      }
    });
    this.setState({ filteredposts: posts });
    console.log("search filter fired", this.state.filteredposts);
  };

  render() {
    return (
      <div className="container">
        <SearchBar searchFilter={this.searchFilter} />
        {this.state.data.map(post => {
          return (
            <PostContainer
              post={post}
              filteredPosts={this.state.filteredposts.length > 0 ? this.state.filteredposts : this.state.posts}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
