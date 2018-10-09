import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor(props) {
    super(props);
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
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        {/* {dummyData.map(data => ( */}
        <PostContainer data={this.state.data} key={Math.random()} />
        {/* ))} */}
      </div>
    );
  }
}

export default App;
