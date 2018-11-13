import React, { Component } from "react";

import dummyData from "./dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log("CDM running");
    this.setState({ data: dummyData });
  }

  render() {
    return (
      console.log('Render running'),
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <div>
          {this.state.data.map(
            post => {
              return (
              <PostContainer key={post.username} post={post} />
              )
          })}
        </div>
      </div>
    );
  }
}

export default App;
