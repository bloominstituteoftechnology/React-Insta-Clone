import React, { Component } from "react";

import dummyData from "./dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import PostsPage from './components/PostContainer/PostsPage';
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      // text: '',
      // id: 0,
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
          <PostsPage key={this.state.data.username} post={this.state.data}/>
      </div>
    );
  }
}

export default App;
