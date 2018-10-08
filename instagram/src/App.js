import React, { Component } from "react";

import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="post-container-list">
          {this.state.dummyData.map(user => {
            return <PostContainer key={user.timestamp} userData={user} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
