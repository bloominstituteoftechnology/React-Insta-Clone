import React, { Component } from 'react';
import './App.css';
import SearchbarContainer from "./components/SearchBar/SearchbarContainer";
import PostContainer from "./components/Post Container/PostContainer";
import dummyData   from "./dummy-data";

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[dummyData]
    };
}
  render() {
    return (
      <div className="App">
        <SearchbarContainer />
        <PostContainer usernames={this.state.data[0]}/>
      </div>
    );
  }
}

export default App;
