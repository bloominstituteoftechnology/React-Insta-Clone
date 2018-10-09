import React, { Component } from "react";
import "./App.css";
import dummyData from "./components/dummy-data";
import Container from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/Searchbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: dummyData });
    }, 800);
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
