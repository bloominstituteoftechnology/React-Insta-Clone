import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount(props) {
    this.setState({data : dummyData})
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(post => {
          return (
            <div className="post">
              <PostContainer data={post} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
