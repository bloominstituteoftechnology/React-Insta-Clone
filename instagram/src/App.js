import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

// fontAwesome imports
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: dummyData })
    }, 200)
  }

  updateSearchText = e => {
    this.setState({ searchText: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchText={this.state.searchText}
          updateSearchText={this.updateSearchText}
        />
        <div className="Posts">
          {this.state.data.map((post, idx) => (
            <PostContainer key={idx} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
