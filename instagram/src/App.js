import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.js";
import dummyData from "./dummy-data";

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
        {this.state.dummyData.map(data => {
          return (
            <p>
              Username: {data.username}, Likes: {data.likes}
            </p>
          );
        })}
      </div>
    );
  }
}

export default App;
