import React, { Component } from "react";
import "./App.css";
import dummyData from "./components/dummy-data";
import Container from "./components/PostContainer/container";
import SearchBar from "./components/SearchBar/Searchbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Container
          data={this.state.data.map(obj => {
            return obj;
          })}
        />
      </div>
    );
  }
}

export default App;
