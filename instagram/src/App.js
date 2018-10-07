import React from "react";
import dummyData from "./dummy-data";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = { dummyData };
  }

  render() {
    return (
      <div className="main-container">
        <SearchBar />
          {this.state.dummyData.map(item => <PostContainer key={item.timestamp} posts={item} />)}
      </div>
    );
  }
}

export default App;
