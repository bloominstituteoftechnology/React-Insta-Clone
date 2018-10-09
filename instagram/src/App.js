import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {

  //   }
  // }

  render() {
    console.log(dummyData.username);
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        {/* {dummyData.map(data => ( */}
        <PostContainer data={dummyData} key={Math.random()} />
        {/* ))} */}
      </div>
    );
  }
}

export default App;
