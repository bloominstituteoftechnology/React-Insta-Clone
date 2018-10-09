import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchResults: []
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  handleSearch = event => {
    this.setState({
      searchResults: this.state.data.filter(post =>
        post.username.includes(event.target.value)
      )
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch} />
        <PostContainer
          data={
            !this.state.searchResults.length
              ? this.state.data
              : this.state.searchResults
          }
        />
      </div>
    );
  }
}

export default App;
