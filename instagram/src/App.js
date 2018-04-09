import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
// import SearchBar from './SearchBar/SearchBar.js';
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyList: []
    };
  }

  componentDidMount = () => {
    // console.log('rendered');
    this.setState({ dummyList: dummyData });
  };

  search = (username) => {
    // returns posts of usernames that user searched for
    console.log(username);
  }

  render() {
    // console.log(this.state.dummyList);
    return (
      <div className="App">
        <SearchBar search={this.search} />
        <PostContainer dummy={this.state.dummyList} />
      </div>
    );
  }
}

export default App;
