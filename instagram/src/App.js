import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";
// fontAwesome imports
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

Authenticate(App);

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
        <PostsPage posts={this.state.data}/>
      </div>
    );
  }
}

export default App;
