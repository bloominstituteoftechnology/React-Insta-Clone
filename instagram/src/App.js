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
    const post = this.state.data.filter(p => {
      if (p.username.includes(event.target.value)) {
        return p;
      }
    });
    this.setState({ filteredposts: post });
    console.log("search filter fired");
  };

  render() {
    return (
      <div className="container">
        <SearchBar searchFilter={this.searchFilter} />
        {this.state.data.map(post => {
          return <PostContainer post={post} />;
        })}
      </div>
    );
  }
}

export default App;
