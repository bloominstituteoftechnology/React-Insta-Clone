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

  search = (username, event) => {
    // returns posts of usernames that user searched for
    // alert('made it');
    const searchResult = this.state.dummyList.filter((post) => {
      return post.username === username;
    });
    if (searchResult.length === 0) {
      // if no results were found OR input field is empty
      // "refresh the page" to the previous state
      this.setState({dummyList: dummyData});
    } else {
      // renders App to reflect search result
      this.setState({ dummyList: searchResult });
    }
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
