import React, { Component } from "react";

import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dummyData: dummyData });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        {!this.state.dummyData.length ? (
          <h2>Loading, please wait...</h2>
        ) : (
          <div>
            <SearchBar />
            <div className="post-container-list">
              {this.state.dummyData.map(user => {
                return <PostContainer key={user.timestamp} userData={user} />;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
