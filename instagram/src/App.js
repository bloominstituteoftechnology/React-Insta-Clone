import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

// - The root App component of your application should import the dummy data from the `dummy-data.js` file with `import dummyData from './dummy-data';` and iterate over said data, passing each individual object as a prop to an instance of `PostContainer`.

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: dummyData
    };
  }
  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <SearchBar className="searchbar-container" />
        <PostContainer users={this.state.users} />
      </div>
    );
  }
}

export default App;
