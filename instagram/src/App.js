import React, { Component } from "react";
import dummyData from "./dummy-data";
import SearchBarNavContainer from "./components/SearchBar/SearchBarNavContainer";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Insta-Clone</h1>
          <SearchBarNavContainer />
          <PostContainer data={this.state.data} />
        </header>
      </div>
    );
  }
}

export default App;
