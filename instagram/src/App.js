import React, { Component } from "react";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

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
        <SearchBarContainer />
        <div className="post-container-container">
          {this.state.data.map(dataOnMap => {
            return <PostContainer data={dataOnMap} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
