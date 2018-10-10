import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar";
import PostContainer from "./components/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(post => {
          return <div className="post">
              <PostContainer dummyData={this.state.dummyData} />
            </div>
        })}
      </div>
    );
  }
}

export default App;
