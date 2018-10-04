import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import Posts from "./components/PostContainer/PostContainer";
import SearchBar from "./components/Search Bar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fake Instagram</h1>
          <SearchBar />
        </header>
        <p className="dummyData">
          {dummyData.map(x => (
            <Posts
              key={x.timestamp}
              username={x.username}
              imageUrl={x.imageUrl}
              thumbnailUrl={x.thumbnailUrl}
              likes={x.likes}
            />
          ))}
        </p>
      </div>
    );
  }
}

export default App;
