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
      filteredposts: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ filteredposts: dummyData, data: dummyData });
    }, 800);
  }

  searchFilterHandler = event => {
    this.setState({ searchTerm: event.target.value });
  };

  searchFilter = event => {
    // event.preventDefault();
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
        {this.state.filteredposts.map(post => {
          return (
            <PostContainer
              filteredPosts={post}
              // filteredPosts={this.state.filteredposts.length > 0 ? this.state.filteredposts : this.state.posts}
              // filterHandler={this.searchFilterHandler}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
